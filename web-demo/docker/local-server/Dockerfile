FROM node:20-alpine

# Install pnpm
RUN corepack enable && corepack prepare pnpm@8.15.1 --activate

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-workspace.yaml ./
COPY packages/shared/package.json ./packages/shared/
COPY packages/pack-loader/package.json ./packages/pack-loader/
COPY docker/local-server/package.json ./docker/local-server/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source files
COPY packages/shared ./packages/shared
COPY packages/pack-loader ./packages/pack-loader
COPY docker/local-server ./docker/local-server

# Build packages
RUN pnpm -r run build

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3001
ENV PACKS_DIR=/packs

# Expose port
EXPOSE 3001

# Start server
WORKDIR /app/docker/local-server
CMD ["pnpm", "start"]