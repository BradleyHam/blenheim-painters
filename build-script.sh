#!/bin/bash

# Debug info
echo "Current directory: $(pwd)"

# Remove any package-lock.json files
echo "Removing any package-lock.json files"
find . -name "package-lock.json" -type f -delete

echo "Package lock files removed" 