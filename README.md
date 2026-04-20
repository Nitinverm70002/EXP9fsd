# Task Manager App

## Overview
This is a comprehensive full-stack Task Manager application showcasing a modern web architecture. It leverages a React frontline interface wrapped with Vite, coupled with a robust Spring Boot backend. The entire application, including the PostgreSQL database, is fully containerized using Docker and Docker Compose, making it extremely easy to set up, build, and deploy. The frontend features a beautiful, responsive, glassmorphic dark theme ensuring a premium user experience.

## Project Structure
The repository is divided into two main components: `frontend` and `backend`, both orchestrated together at the root level via Docker Compose.

```
EXP9/
├── docker-compose.yml       # Orchestrates the DB, Backend, and Frontend services
├── frontend/                # React Vite Frontend application
│   ├── Dockerfile           # Multi-stage build (builds app -> serves via Nginx)
│   ├── nginx.conf           # Custom Nginx configuration for routing
│   ├── package.json         # Node.js dependencies
│   ├── vite.config.js       # Vite configuration
│   └── src/                 # React source code (App.jsx, index.css, etc.)
└── backend/                 # Spring Boot Backend application
    ├── Dockerfile           # Builds and runs the Java application
    ├── pom.xml              # Maven configuration
    └── src/                 # Java source code
```

## Tech Stack
### Frontend
- **Framework:** React + Vite
- **Styling:** Custom CSS with Premium Glassmorphism Dark Theme
- **Web Server:** Nginx (for serving the static production build)

### Backend
- **Framework:** Spring Boot (Java 17)
- **Data Access:** Spring Data JPA
- **Database:** PostgreSQL (15-alpine)
- **Build Tool:** Maven

### DevOps & Orchestration
- **Containerization:** Docker
- **Orchestrator:** Docker Compose

## Features
- **Modern User Interface:** A stunning glassmorphic design featuring vibrant gradients, sleek animations, and responsive interactions.
- **RESTful API:** A well-structured Spring Boot backend to handle `GET` and `POST` requests for task operations.
- **Containerized Environment:** Run the database, backend, and frontend simultaneously with a single `docker-compose up` command.
- **Persistent Storage:** Utilizes Docker volumes (`postgres_data`) to ensure task data isn't lost between container restarts.
- **Production Ready Frontend:** The React app is built and served using a lightweight Nginx container for optimal performance.

## Getting Started
To run this application locally, ensure you have **Docker** and **Docker Compose** installed.

1. Clone the repository.
2. Navigate to the root directory.
3. Run the following command:
   ```bash
   docker-compose up --build
   ```
4. Access the frontend app at `http://localhost`.

## Conclusion
This project serves as an excellent reference for building, styling, and containerizing a multi-tier web application. It successfully bridges a modern React/Vite frontend with a solid Java Spring Boot backend, all while maintaining a streamlined developer experience through Docker Compose.
