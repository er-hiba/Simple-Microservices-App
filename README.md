## Description
This is a **Node.js** and **Express** microservices application for managing products and orders. It features **JWT** authentication, **MongoDB** databases, and is built as a learning tool for microservices architecture.

Now, the application has been **Dockerized** to make it easier to deploy and run in different environments using **Docker** and **Docker Compose**.

## Branches

This repository contains two branches to manage different versions of the app:

- **`main`**  
  The Dockerized version of the application. This branch includes Dockerfiles, a docker-compose.yaml file, and environment configurations for running the services in containers.
  
- **`without-docker`**  
  The original version of the application without Docker integration. Use this branch to review the code prior to containerization.

## Notes

- The .gitignore file is configured to exclude sensitive and unnecessary files, including:  
♡  &nbsp; Environment files (.env)  
♡  &nbsp; node_modules/ directories  
♡  &nbsp; data/ directory (Docker volumes)  

- The application’s data and parts of the scripts are in French.
