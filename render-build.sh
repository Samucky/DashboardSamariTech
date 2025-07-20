#!/bin/bash
set -e

echo "=== Render Build Script ==="
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"

echo "Installing ALL dependencies (including dev dependencies)..."
npm ci

echo "Building application..."
npm run build

echo "Build completed successfully!"
ls -la dist/ 