#!/bin/bash

# Define the image and container name
IMAGE_NAME="mahadev-blog"
CONTAINER_NAME="mahadev-blog-container"

# Step 1: Build the Docker image
echo "Building the Docker image..."
docker build -t $IMAGE_NAME .

# Step 2: Stop and remove any old container
echo "Stopping and removing old container..."
docker stop $CONTAINER_NAME || true
docker rm $CONTAINER_NAME || true

# Step 3: Run the Docker container
echo "Running the Docker container..."
docker run -d -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME

# Confirmation message
echo "Deployment successful! The app is now running on http://localhost:3000"
