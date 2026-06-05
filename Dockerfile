# Stage 1: Build the React frontend
FROM node:18-bullseye AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Stage 2: Setup Backend and Nginx
FROM node:18-bullseye
WORKDIR /app

# Install Nginx
RUN apt-get update && apt-get install -y nginx && rm -rf /var/lib/apt/lists/*

# Copy backend files and install dependencies
COPY backend/package*.json ./backend/
RUN cd backend && npm install
COPY backend/ ./backend/

# Copy the built frontend from Stage 1
COPY --from=frontend-builder /app/frontend/dist ./frontend/dist

# Copy Nginx configuration and start script
COPY nginx.conf ./
COPY start.sh ./
RUN chmod +x start.sh

# Set up permissions for Hugging Face Spaces (user 1000)
# Nginx needs permission to write to /var/lib/nginx and /var/log/nginx
RUN chown -R 1000:1000 /app && \
    mkdir -p /var/log/nginx && chown -R 1000:1000 /var/log/nginx && \
    mkdir -p /var/lib/nginx && chown -R 1000:1000 /var/lib/nginx && \
    touch /tmp/nginx.pid && chown 1000:1000 /tmp/nginx.pid

# Expose port 7860 as required by Hugging Face Spaces
EXPOSE 7860

# Switch to unprivileged user
USER 1000

# Start application
CMD ["./start.sh"]
