FROM node:20-alpine

# Install pnpm
RUN corepack enable && corepack prepare pnpm@8.15.1 --activate

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-workspace.yaml ./
COPY packages/shared/package.json ./packages/shared/
COPY packages/pack-loader/package.json ./packages/pack-loader/
COPY apps/web/package.json ./apps/web/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source files
COPY packages ./packages
COPY apps/web ./apps/web

# Expose port
EXPOSE 5173

# Start development server
WORKDIR /app
CMD ["pnpm", "dev:web"]