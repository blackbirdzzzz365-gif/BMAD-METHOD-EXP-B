# BMAD Web Demo - Setup Guide

This guide will help you set up and run the BMAD Web Demo application.

## Prerequisites

- Node.js >= 20.0.0
- pnpm >= 8.0.0
- Docker & Docker Compose (optional, for containerized setup)
- Cloudflare account (for cloud deployment)

## Quick Start

### 1. Clone and Install

```bash
# Navigate to web-demo directory
cd web-demo

# Install dependencies
pnpm install

# Initial setup (builds packages and creates .env.local)
pnpm setup
```

### 2. Configure Environment

Edit `.env.local` to set your configuration:

```env
# For local development
VITE_API_MODE=local
VITE_API_URL=http://localhost:3001/api
VITE_WS_URL=ws://localhost:3001/ws
PACKS_DIR=../../BMAD-METHOD/expansion-packs
```

### 3. Run Development Servers

#### Option A: Run Separately

```bash
# Terminal 1: Start WebSocket server
pnpm dev:server

# Terminal 2: Start web app
pnpm dev:web
```

#### Option B: Run Together

```bash
# Start both servers in parallel
pnpm dev
```

#### Option C: Use Docker

```bash
# Build and run with Docker Compose
pnpm dev:docker
```

### 4. Access the Application

- Web UI: http://localhost:5173
- API: http://localhost:3001/api
- WebSocket: ws://localhost:3001/ws

## Detailed Setup

### Local Development

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Build Packages**
   ```bash
   pnpm build
   ```

3. **Configure Environment**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your settings
   ```

4. **Start Development**
   ```bash
   pnpm dev
   ```

### Docker Development

1. **Build Images**
   ```bash
   docker-compose build
   ```

2. **Start Services**
   ```bash
   docker-compose up
   ```

3. **Access Logs**
   ```bash
   docker-compose logs -f
   ```

## Cloudflare Deployment

### 1. Setup Cloudflare

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Create KV Namespace**
   ```bash
   wrangler kv:namespace create "PACKS_KV"
   wrangler kv:namespace create "PACKS_KV" --preview
   ```

4. **Update wrangler.toml**
   Update the KV namespace IDs in `apps/worker/wrangler.toml`

### 2. Upload Expansion Packs

```bash
# Upload packs to KV storage
pnpm upload:packs <kv-namespace-id> ../../BMAD-METHOD/expansion-packs
```

### 3. Deploy

```bash
# Deploy everything to Cloudflare
pnpm deploy:cf
```

### 4. Configure SvelteKit for Cloudflare

Update `.env.production`:
```env
VITE_API_MODE=cloud
VITE_API_URL=https://your-worker.workers.dev/api
VITE_WS_URL=wss://your-worker.workers.dev/ws
```

## Troubleshooting

### Port Already in Use

If port 3001 or 5173 is already in use:

```bash
# Find process using port
lsof -i :3001

# Kill process
kill -9 <PID>
```

### WebSocket Connection Failed

1. Check server is running: `curl http://localhost:3001/health`
2. Check CORS settings in browser console
3. Verify WebSocket URL in `.env.local`

### Packs Not Loading

1. Check PACKS_DIR path is correct
2. Verify expansion packs have `config.yaml`
3. Check server logs for errors

### Docker Issues

1. **Build fails**: Clear Docker cache
   ```bash
   docker-compose build --no-cache
   ```

2. **Can't access packs**: Check volume mount in docker-compose.yml

3. **Permission issues**: Ensure packs directory is readable

### Cloudflare Issues

1. **KV not working**: Verify namespace IDs in wrangler.toml
2. **WebSocket fails**: Ensure Durable Objects are enabled
3. **Deploy fails**: Check account permissions and quotas

## Development Tips

### Hot Reload

Both the web app and server support hot reload in development mode.

### Testing WebSocket

Use a WebSocket client to test:
```javascript
const ws = new WebSocket('ws://localhost:3001/ws');
ws.onopen = () => {
  ws.send(JSON.stringify({
    type: 'connection',
    payload: { sessionId: 'test-123' }
  }));
};
ws.onmessage = (e) => console.log(JSON.parse(e.data));
```

### Adding Mock Data

For development without real packs, the PackService includes mock data. See `apps/web/src/lib/services/pack.service.ts`.

## Production Considerations

1. **Security**
   - Add authentication to WebSocket connections
   - Implement rate limiting
   - Validate all inputs

2. **Performance**
   - Enable caching for pack data
   - Use CDN for static assets
   - Optimize WebSocket reconnection

3. **Monitoring**
   - Add error tracking (e.g., Sentry)
   - Monitor WebSocket connections
   - Track API usage

## Support

- Check the main README for architecture details
- See individual package READMEs for specific information
- Report issues on GitHub