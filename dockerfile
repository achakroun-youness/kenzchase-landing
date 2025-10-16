FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies with legacy peer deps flag to handle dependency conflicts
RUN npm ci --legacy-peer-deps

# Copy application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port for the application
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
