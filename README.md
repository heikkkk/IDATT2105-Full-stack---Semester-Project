# Quizopia Frontend

This repository contains the frontend code for our Quiz Application, Quizopia.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

# Setup
To run the frontend server, follow these steps:

1. **Clone this repository to your local machine**:
```shell
git clone https://github.com/heikkkk/IDATT2105-Semester-Project-Frontend.git
```
2. **Ensure you have Node.js and npm (Node Package Manager) installed**
3. **Navigate to the project directory in your terminal.**
4. **Project Setup**:
```shell
npm install
```
5. **Compile and Hot-Reload for Development**:
```shell
npm run dev
```

# Prerequisites

Before you can run the frontend application, ensure you have the following software installed on your system:
- **Node.js and npm (Node Package Manager)**: Download and install Node.js (which includes npm). [Download Node.js](https://nodejs.org/en)

# Testing
## Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

## Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e
```

Rememeber that the backend application needs to be running for this to work.

# Test Data
1. **Backend Server**: Make sure that the backend server is up and running, and is connected to the database.
2. **Test Data**: Thanks to our schema scripts and the use of Flyway for database migration, test data will automatically populate your database upon running the backend server.
3. **Test Users**: We have predefined three test users within the system: **adminUser**, **regularUser** and **guestUser**. They all use the same password: **password123**.
4. **Example Quizzes**: We have also preloaded four example quizzes that will be able to playthrough and edit if you select the user **adminUser**.

# How to Use the Application
1. This is the screen you should see when starting up. Click on the button **login**
![image](https://github.com/heikkkk/IDATT2105-Semester-Project-Frontend/assets/89779148/c6ef3d21-555a-450f-86f3-1ab9c9a0ee27)
2. 

# Common Issues and Troubleshooting

## Issues with the Backend Server

1. **Is your Backend running?**: ~~Well you better go catch it~~ First, verify that the backend server process is active.

2. **Verify Server Status**: After starting the backend server, ensure it is running on localhost and listening on port 8080.

# CI/CD - Github Actions
## CI
Tests are run continuously with the Continuous Integration pipeline through Github Actions. The pipeline executes npm commands to build the application and run tests.

## CD
The Continuous Deployment pipeline automates the deployment of the Quizopia frontend application to GitHub Packages whenever changes are pushed to the main branch. NOTE: It only gets deployed if the version number is incremented in package.json:
```json
{
  "name": "@heikkkk/idatt2105-semester-project-frontend",
  "version": "X.X.X",
  "repository": {
    "type": "git",
    "url": "git://github.com/heikkkk/IDATT2105-Semester-Project-Frontend.git"
  },
```
