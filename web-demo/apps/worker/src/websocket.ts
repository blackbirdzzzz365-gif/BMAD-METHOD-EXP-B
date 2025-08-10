import type { Context } from 'hono';
import type { Env } from './types';

export async function handleWebSocket(c: Context<{ Bindings: Env }>, sessionId: string) {
  // Get or create durable object for this session
  const id = c.env.WEBSOCKET_SESSIONS.idFromName(sessionId);
  const stub = c.env.WEBSOCKET_SESSIONS.get(id);
  
  // Forward the WebSocket connection to the durable object
  const url = new URL(c.req.url);
  url.pathname = '/websocket';
  
  return stub.fetch(url.toString(), {
    headers: c.req.raw.headers,
  });
}