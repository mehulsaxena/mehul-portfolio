#!/bin/bash
echo "📦 Cleaning old builds..."
rm -rf .next out

echo "🔧 Installing dependencies..."
npm install

echo "🚀 Building the project..."
npm run build

echo "🌍 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete! Visit: https://mehulsaxena.github.io/mehul-portfolio/"
