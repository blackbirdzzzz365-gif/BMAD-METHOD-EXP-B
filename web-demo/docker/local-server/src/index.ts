import express from 'express';
import cors from 'cors';
import { WebSocketServer } from 'ws';
import { createServer } from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import { PackRegistry, NodeFileReader } from '@bmad/pack-loader';
import { WebSocketHandler } from './websocket-handler.js';
import { apiRouter } from './api-router.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const PORT = process.env.PORT || 3001;
const PACKS_DIR = process.env.PACKS_DIR || path.join(__dirname, '../../../../BMAD-METHOD/expansion-packs');

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// Initialize pack registry
const fileReader = new NodeFileReader(PACKS_DIR);
const packRegistry = new PackRegistry(PACKS_DIR, fileReader);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API routes
const router = apiRouter(packRegistry);
app.use('/api', router);

// 404 handler - must be last
app.use((req, res, next) => {
  console.log(`404: ${req.method} ${req.path}`);
  res.status(404).json({ error: 'Not Found', message: 'The requested resource does not exist' });
});

// Create HTTP server
const server = createServer(app);

// Initialize WebSocket server
const wss = new WebSocketServer({ server, path: '/ws' });
const wsHandler = new WebSocketHandler(packRegistry);

wss.on('connection', (ws, req) => {
  console.log('New WebSocket connection');
  wsHandler.handleConnection(ws, req);
});

// Start server
async function start() {
  try {
    // Discover packs on startup
    console.log(`Discovering packs in: ${PACKS_DIR}`);
    const packs = await packRegistry.discover();
    console.log(`Found ${packs.length} expansion packs:`, packs.map(p => p.id));

    server.listen(Number(PORT), '0.0.0.0', () => {
      console.log(`🚀 BMAD Local Server running on:`);
      console.log(`   HTTP: http://localhost:${PORT}`);
      console.log(`   WebSocket: ws://localhost:${PORT}/ws`);
      console.log(`   API: http://localhost:${PORT}/api`);
    });
    
    server.on('error', (error) => {
      console.error('Server error:', error);
      process.exit(1);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

// Start the server
start();