FROM node:20-alpine

WORKDIR /app

# Copy package files first (Docker layer caching optimization)
COPY package.json package-lock.json* ./

# Configure npm and install dependencies
RUN npm config set legacy-peer-deps true \
    && npm ci --no-audit --no-fund --prefer-offline --maxsockets 5

# Copy application source
COPY . .

# Build Next.js app
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]