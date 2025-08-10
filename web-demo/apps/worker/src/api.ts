import { Hono } from 'hono';
import type { Env, PackData } from './types';

export const apiRouter = new Hono<{ Bindings: Env }>();

// Get all packs
apiRouter.get('/packs', async (c) => {
  try {
    // List all packs from KV
    const list = await c.env.PACKS_KV.list({ prefix: 'pack:' });
    
    const packs = await Promise.all(
      list.keys.map(async (key) => {
        const data = await c.env.PACKS_KV.get(key.name, 'json') as PackData;
        return {
          id: data.id,
          config: data.config,
          loaded: true,
        };
      })
    );

    return c.json({
      success: true,
      packs,
    });
  } catch (error) {
    console.error('Error listing packs:', error);
    return c.json({
      success: false,
      error: {
        code: 'LIST_ERROR',
        message: 'Failed to list packs',
      },
    }, 500);
  }
});

// Get specific pack
apiRouter.get('/packs/:packId', async (c) => {
  try {
    const packId = c.req.param('packId');
    const pack = await c.env.PACKS_KV.get(`pack:${packId}`, 'json') as PackData;
    
    if (!pack) {
      return c.json({
        success: false,
        error: {
          code: 'PACK_NOT_FOUND',
          message: `Pack ${packId} not found`,
        },
      }, 404);
    }

    return c.json({
      success: true,
      pack,
    });
  } catch (error) {
    console.error('Error loading pack:', error);
    return c.json({
      success: false,
      error: {
        code: 'LOAD_ERROR',
        message: 'Failed to load pack',
      },
    }, 500);
  }
});

// Get pack agents
apiRouter.get('/packs/:packId/agents', async (c) => {
  try {
    const packId = c.req.param('packId');
    const pack = await c.env.PACKS_KV.get(`pack:${packId}`, 'json') as PackData;
    
    if (!pack) {
      return c.json({
        success: false,
        error: {
          code: 'PACK_NOT_FOUND',
          message: `Pack ${packId} not found`,
        },
      }, 404);
    }

    return c.json({
      success: true,
      agents: pack.agents || [],
    });
  } catch (error) {
    console.error('Error loading agents:', error);
    return c.json({
      success: false,
      error: {
        code: 'LOAD_ERROR',
        message: 'Failed to load agents',
      },
    }, 500);
  }
});

// Get specific agent
apiRouter.get('/packs/:packId/agents/:agentId', async (c) => {
  try {
    const packId = c.req.param('packId');
    const agentId = c.req.param('agentId');
    
    const pack = await c.env.PACKS_KV.get(`pack:${packId}`, 'json') as PackData;
    
    if (!pack) {
      return c.json({
        success: false,
        error: {
          code: 'PACK_NOT_FOUND',
          message: `Pack ${packId} not found`,
        },
      }, 404);
    }

    const agent = pack.agents?.find(a => a.id === agentId);
    
    if (!agent) {
      return c.json({
        success: false,
        error: {
          code: 'AGENT_NOT_FOUND',
          message: `Agent ${agentId} not found in pack ${packId}`,
        },
      }, 404);
    }

    return c.json({
      success: true,
      agent,
    });
  } catch (error) {
    console.error('Error loading agent:', error);
    return c.json({
      success: false,
      error: {
        code: 'LOAD_ERROR',
        message: 'Failed to load agent',
      },
    }, 500);
  }
});

// Upload/update pack (admin endpoint)
apiRouter.post('/packs/:packId', async (c) => {
  try {
    const packId = c.req.param('packId');
    const packData = await c.req.json() as PackData;
    
    // Add metadata
    packData.id = packId;
    packData.lastUpdated = Date.now();
    
    // Store in KV
    await c.env.PACKS_KV.put(
      `pack:${packId}`, 
      JSON.stringify(packData),
      {
        metadata: {
          version: packData.config?.version || '1.0.0',
          name: packData.config?.name || packId,
        },
      }
    );

    return c.json({
      success: true,
      message: `Pack ${packId} uploaded successfully`,
    });
  } catch (error) {
    console.error('Error uploading pack:', error);
    return c.json({
      success: false,
      error: {
        code: 'UPLOAD_ERROR',
        message: 'Failed to upload pack',
      },
    }, 500);
  }
});

// Health check
apiRouter.get('/health', async (c) => {
  try {
    const list = await c.env.PACKS_KV.list({ limit: 1 });
    
    return c.json({
      success: true,
      health: {
        status: 'healthy',
        kvAccessible: true,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    return c.json({
      success: false,
      health: {
        status: 'unhealthy',
        kvAccessible: false,
        error: 'Failed to access KV store',
        timestamp: new Date().toISOString(),
      },
    }, 503);
  }
});