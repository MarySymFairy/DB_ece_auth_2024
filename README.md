<img height="300" width="400" alt="NeurosyncDB Logo" src="https://github.com/user-attachments/assets/a2200c3d-718d-4d4b-a53e-bed4ed3665a7" />

# Database-Project in ECE AUTH

## 9th Semester, Aristotle University of Thessaloniki, 2024-2025

## Overview
This server was generated by the [swagger-codegen](https://github.com/swagger-api/swagger-codegen) project.  By using the [OpenAPI-Spec](https://github.com/OAI/OpenAPI-Specification) from a remote server, you can easily generate a server stub. This repository contains a full-stack application built using React for the frontend and Node.js (Express.js) for the backend, leveraging a database for data management.

## Prerequisites

Before you begin, make sure you have the following installed:

*   **Node.js and npm (or yarn):** You can download Node.js from [https://nodejs.org/](https://nodejs.org/). npm usually comes bundled with Node.js.
*   **Git:** To clone the repository. If you don't have it, download it from [https://git-scm.com/](https://git-scm.com/).

## Execution Instructions

Follow these steps to run the application:

### 1. Clone the Repository

Open your terminal or command prompt and navigate to where you'd like to clone the project, then run:

   ```bash
   git clone https://github.com/MarySymFairy/NeurosyncDB.git
   cd NeurosyncDB
   ```

### 2. Configure the DB
The DB is used through MySQLWorkbench and it is an SQL database. Make sure to create an .env file containing your sensitive data, according to .env.example, to connect your DB to the project. I have also added a dump file of the DB we constructed for this project. (dbsql.sql)


### 3. Running the server
To run the server, run:

```
npm start
```

To view the Swagger UI interface:

```
open http://localhost:8080/docs
```

This project leverages the mega-awesome [swagger-tools](https://github.com/apigee-127/swagger-tools) middleware which does most all the work.
