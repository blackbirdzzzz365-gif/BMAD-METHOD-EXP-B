# BMAD Web Demo

Interactive web application for BMAD-METHOD agent interaction with dynamic expansion pack loading.

## Features

- 🔌 **Dynamic Pack Loading** - Automatically discovers and loads expansion packs
- 💬 **Real-time Chat** - WebSocket-based communication with agents
- 🎨 **Visual Problem Solving** - Mermaid diagrams, ASCII art, and structured tables
- 🤝 **Multi-Agent Support** - Seamless agent switching and collaboration
- ☁️ **Dual Deployment** - Run locally or deploy to Cloudflare Workers
- 📱 **Responsive Design** - Works on desktop and mobile devices

## Architecture

```
web-demo/
├── apps/
│   ├── web/              # SvelteKit frontend
│   └── worker/           # Cloudflare Worker API
├── packages/
│   ├── shared/           # Shared types & utilities
│   ├── pack-loader/      # Dynamic pack loading
│   └── agent-runtime/    # Agent execution engine
└── docker/
    └── local-server/     # Local WebSocket server
```

## Quick Start

### Prerequisites

- Node.js >= 20.0.0
- pnpm >= 8.0.0

### Installation

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build
```

### Development

```bash
# Start development servers (frontend + backend)
pnpm dev

# Start only the web frontend
pnpm dev:web

# Start only the WebSocket server
pnpm dev:server
```

The app will be available at:
- Frontend: http://localhost:5173
- WebSocket: ws://localhost:3001

### Production Build

```bash
# Build all packages
pnpm build

# Preview production build
pnpm preview
```

## Deployment

### Cloudflare Workers

1. Configure your Cloudflare account:
```bash
npx wrangler login
```

2. Deploy to Cloudflare:
```bash
pnpm deploy:cf
```

### Docker (Local Server)

```bash
# Build Docker image
docker build -t bmad-demo .

# Run container
docker run -p 8080:8080 bmad-demo
```

## Configuration

### Environment Variables

Create a `.env.local` file:

```env
# API Configuration
VITE_API_MODE=local          # 'local' or 'cloud'
VITE_API_URL=http://localhost:3000/api
VITE_WS_URL=ws://localhost:3001

# For production
VITE_API_MODE=cloud
VITE_API_URL=https://your-worker.workers.dev/api
VITE_WS_URL=wss://your-worker.workers.dev/ws
```

## Development Guide

### Adding New UI Components

Components go in `apps/web/src/lib/components/`:

```svelte
<!-- MyComponent.svelte -->
<script lang="ts">
  import type { SomeType } from '@bmad/shared';
  
  export let data: SomeType;
</script>

<div class="my-component">
  <!-- Component content -->
</div>

<style>
  /* Component styles */
</style>
```

### Working with Pack Loader

```typescript
import { PackRegistry, BrowserFileReader } from '@bmad/pack-loader';

const fileReader = new BrowserFileReader('/expansion-packs');
const registry = new PackRegistry('/expansion-packs', fileReader);

// Discover packs
const packs = await registry.discover();

// Load a specific pack
const pack = await registry.loadPack('bmad-problem-solver');
```

### WebSocket Protocol

Client → Server:
```typescript
{
  type: 'activation',
  payload: {
    packId: 'bmad-problem-solver',
    agentId: 'systems-thinker'
  }
}
```

Server → Client:
```typescript
{
  type: 'message',
  payload: {
    agentId: 'systems-thinker',
    agentName: 'Dr. Sarah Chen',
    content: 'Let me analyze this system...'
  }
}
```

## Testing

```bash
# Run unit tests
pnpm test

# Run type checking
pnpm typecheck

# Run linting
pnpm lint
```

## Troubleshooting

### WebSocket Connection Issues

1. Check that the WebSocket server is running
2. Verify the `VITE_WS_URL` is correct
3. Check browser console for errors

### Pack Loading Issues

1. Ensure expansion packs are in the correct directory
2. Verify `config.yaml` exists for each pack
3. Check file permissions

### Build Issues

1. Clear build cache: `pnpm clean`
2. Reinstall dependencies: `rm -rf node_modules && pnpm install`
3. Check Node.js version: `node --version` (should be >= 20.0.0)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

MIT License - see LICENSE file for details