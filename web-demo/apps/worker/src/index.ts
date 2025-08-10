import { Hono } from 'hono';
import { cors } from 'hono/cors';
import type { Env } from './types';
import { apiRouter } from './api';
import { handleWebSocket } from './websocket';

// Export Durable Object class
export { WebSocketSession } from './websocket-session';

const app = new Hono<{ Bindings: Env }>();

// Enable CORS
app.use('/*', cors());

// Health check
app.get('/health', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: c.env.ENVIRONMENT || 'production',
  });
});

// API routes
app.route('/api', apiRouter);

// WebSocket endpoint
app.get('/ws', async (c) => {
  const upgradeHeader = c.req.header('Upgrade');
  if (!upgradeHeader || upgradeHeader !== 'websocket') {
    return c.text('Expected Upgrade: websocket', 426);
  }

  const sessionId = c.req.query('sessionId') || crypto.randomUUID();
  return handleWebSocket(c, sessionId);
});

// Default route
app.get('/', (c) => {
  return c.json({
    name: 'BMAD Demo Worker',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      api: '/api',
      websocket: '/ws',
    },
  });
});

export default app;