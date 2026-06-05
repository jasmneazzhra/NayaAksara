#!/bin/bash

# Start the Node.js backend in the background
echo "Starting backend..."
cd /app/backend
npm start &

# Start Nginx in the foreground
echo "Starting Nginx..."
nginx -c /app/nginx.conf
