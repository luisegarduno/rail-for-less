#!/usr/bin/env bash

set -e

echo "---> Installing packages for frontend"
cd frontend && yarn
echo "---> Packages Installed."

echo "---> Building docker-compose images..."
cd ..
docker compose build
echo "-------> Done!"

echo "--> Starting website"
docker compose down -v
docker compose up -d
echo "---> Running @ http://localhost:3000/" 
echo "----> To stop, simply run 'docker compose down'"
