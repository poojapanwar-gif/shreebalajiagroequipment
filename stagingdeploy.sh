#!/bin/bash

echo "🔁 Starting deployment for modxcomputers.com"

# Navigate to project directory
cd /www/wwwroot/staging.modxcomputers.com || {
  echo "❌ Project folder not found!"
  exit 1
}


# Pull latest code
echo "📥 Pulling latest code from Bitbucket..."
git pull origin staging

# Fix for Git ownership warning (just in case)
git config --global --add safe.directory /www/wwwroot/staging.modxcomputers.com

# Clean old build cache
echo "🧹 Removing old .next build cache..."
rm -rf .next
npm cache clean --force

# Install dependencies
echo "📦 Installing npm packages..."
npm install --legacy-peer-deps

# Build the app
echo "🏗️ Building Next.js app..."
npm run build

# Restart PM2 process cleanly
echo "🧹 Deleting and restarting PM2 process..."
pm2 delete modx-staging
pm2 start npm --name "modx-staging" -- start
pm2 save

echo "✅ Deployment complete!"
