#!/bin/bash

# Bash script to start dev mysql database

# Build the docker image
docker build -t my-mysql-container .

# Run the container
docker run -d -p 3336:3336 --name test-db my-mysql-container
