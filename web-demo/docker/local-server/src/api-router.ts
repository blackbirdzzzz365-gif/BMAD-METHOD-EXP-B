import { Router } from 'express';
import type { PackRegistry } from '@bmad/shared';
import path from 'path';
import { promises as fs } from 'fs';

export function apiRouter(packRegistry: PackRegistry): Router {
  const router = Router();

  // Get all packs
  router.get('/packs', async (req, res) => {
    try {
      const packs = await packRegistry.discover();
      res.json({
        success: true,
        packs: packs.map(pack => ({
          id: pack.id,
          config: pack.config,
          loaded: pack.loaded,
        })),
      });
    } catch (error) {
      console.error('Error discovering packs:', error);
      res.status(500).json({
        success: false,
        error: {
          code: 'DISCOVERY_ERROR',
          message: 'Failed to discover packs',
        },
      });
    }
  });

  // Get specific pack
  router.get('/packs/:packId', async (req, res) => {
    try {
      const { packId } = req.params;
      const pack = await packRegistry.loadPack(packId);
      
      if (!pack) {
        return res.status(404).json({
          success: false,
          error: {
            code: 'PACK_NOT_FOUND',
            message: `Pack ${packId} not found`,
          },
        });
      }

      res.json({
        success: true,
        pack,
      });
    } catch (error) {
      console.error(`Error loading pack ${req.params.packId}:`, error);
      res.status(500).json({
        success: false,
        error: {
          code: 'LOAD_ERROR',
          message: 'Failed to load pack',
        },
      });
    }
  });

  // Get pack agents
  router.get('/packs/:packId/agents', async (req, res) => {
    try {
      const { packId } = req.params;
      const pack = await packRegistry.loadPack(packId);
      
      if (!pack) {
        return res.status(404).json({
          success: false,
          error: {
            code: 'PACK_NOT_FOUND',
            message: `Pack ${packId} not found`,
          },
        });
      }

      res.json({
        success: true,
        agents: pack.agents,
      });
    } catch (error) {
      console.error(`Error loading agents for pack ${req.params.packId}:`, error);
      res.status(500).json({
        success: false,
        error: {
          code: 'LOAD_ERROR',
          message: 'Failed to load agents',
        },
      });
    }
  });

  // Get specific agent
  router.get('/packs/:packId/agents/:agentId', async (req, res) => {
    try {
      const { packId, agentId } = req.params;
      const agent = packRegistry.getAgent(packId, agentId);
      
      if (!agent) {
        // Try loading the pack first
        await packRegistry.loadPack(packId);
        const loadedAgent = packRegistry.getAgent(packId, agentId);
        
        if (!loadedAgent) {
          return res.status(404).json({
            success: false,
            error: {
              code: 'AGENT_NOT_FOUND',
              message: `Agent ${agentId} not found in pack ${packId}`,
            },
          });
        }
        
        res.json({
          success: true,
          agent: loadedAgent,
        });
      } else {
        res.json({
          success: true,
          agent,
        });
      }
    } catch (error) {
      console.error(`Error loading agent ${req.params.agentId}:`, error);
      res.status(500).json({
        success: false,
        error: {
          code: 'LOAD_ERROR',
          message: 'Failed to load agent',
        },
      });
    }
  });

  // List directory contents (for browser file reader)
  router.get('/list', async (req, res) => {
    try {
      const { path: dirPath } = req.query;
      
      if (!dirPath || typeof dirPath !== 'string') {
        return res.status(400).json({
          success: false,
          error: {
            code: 'INVALID_PATH',
            message: 'Path parameter is required',
          },
        });
      }

      // Security: ensure path is within packs directory
      const fullPath = path.join(process.env.PACKS_DIR || '', dirPath);
      const files = await fs.readdir(fullPath);
      
      res.json({
        success: true,
        files,
      });
    } catch (error) {
      console.error('Error listing directory:', error);
      res.status(500).json({
        success: false,
        error: {
          code: 'LIST_ERROR',
          message: 'Failed to list directory',
        },
      });
    }
  });

  // Health check for packs
  router.get('/health', async (req, res) => {
    try {
      const packs = await packRegistry.discover();
      res.json({
        success: true,
        health: {
          status: 'healthy',
          packsAvailable: packs.length,
          timestamp: new Date().toISOString(),
        },
      });
    } catch (error) {
      res.status(503).json({
        success: false,
        health: {
          status: 'unhealthy',
          error: 'Failed to access packs',
          timestamp: new Date().toISOString(),
        },
      });
    }
  });

  return router;
}