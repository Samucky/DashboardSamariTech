#!/bin/bash
set -e

echo "=== Render Build Script ==="
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"

echo "Installing dependencies..."
npm ci --only=production

echo "Installing dev dependencies for build..."
npm ci

echo "Building application..."
npm run build

echo "Build completed successfully!"
ls -la dist/ 