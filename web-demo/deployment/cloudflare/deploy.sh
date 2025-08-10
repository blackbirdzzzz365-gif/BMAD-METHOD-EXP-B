#!/bin/bash

# BMAD Web Demo - Cloudflare Deployment Script

set -e

echo "🚀 BMAD Web Demo - Cloudflare Deployment"
echo "========================================"

# Check if wrangler is installed
if ! command -v wrangler &> /dev/null; then
    echo "❌ Wrangler CLI not found. Please install it first:"
    echo "   npm install -g wrangler"
    exit 1
fi

# Check if logged in to Cloudflare
if ! wrangler whoami &> /dev/null; then
    echo "❌ Not logged in to Cloudflare. Running 'wrangler login'..."
    wrangler login
fi

# Build all packages
echo "📦 Building packages..."
pnpm build

# Deploy Worker
echo "☁️  Deploying Worker to Cloudflare..."
cd apps/worker
wrangler deploy

# Get Worker URL
WORKER_URL=$(wrangler deployments list | grep -o 'https://[^ ]*' | head -1)
echo "✅ Worker deployed to: $WORKER_URL"

# Build and deploy SvelteKit app
cd ../web
echo "🌐 Building SvelteKit app..."
pnpm build

echo "📤 Deploying to Cloudflare Pages..."
# Note: You'll need to set up Cloudflare Pages separately
# wrangler pages deploy .svelte-kit/cloudflare

echo "✨ Deployment complete!"
echo ""
echo "Next steps:"
echo "1. Upload expansion packs to KV storage"
echo "2. Configure environment variables"
echo "3. Set up custom domain (optional)"
echo ""
echo "Worker API: $WORKER_URL/api"
echo "WebSocket: wss://${WORKER_URL#https://}/ws"