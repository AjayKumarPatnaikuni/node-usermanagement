# Use a lightweight Node.js Alpine image
FROM node:18-alpine AS builder

WORKDIR /app

# Install necessary dependencies
RUN apk add --no-cache python3 make g++

# Copy package.json first to leverage Docker layer caching
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli@16.2.0

# Install project dependencies
RUN npm install --legacy-peer-deps

# Copy the source code
COPY . .

# Build the Angular app
RUN npm run build --prod

# Use a lightweight Nginx Alpine image to serve the frontend
FROM nginx:alpine

# Copy built Angular app from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
