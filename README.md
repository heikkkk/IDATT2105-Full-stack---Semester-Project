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
npm run test:e2e:dev
```

Rememeber that the backend application needs to be running up against the test database for this to work. See [here](https://github.com/heikkkk/IDATT2105-Semester-Project-Backend/blob/main/README.md#testing) for more details.

# Test Data
1. **Backend Server**: Make sure that the backend server is up and running, and is connected to the database.
2. **Test Data**: Thanks to our schema scripts and the use of Flyway for database migration, test data will automatically populate your database upon running the backend server.
3. **Test Users**: We have predefined three test users within the system: **adminUser**, **regularUser** and **guestUser**. They all use the same password: **password123**.
4. **Example Quizzes**: We have also preloaded four example quizzes that you will be able to playthrough. You can also edit and delete them if you select the user **adminUser** since
they are set as the author.

# How to Use the Application
1. This is the screen you should see when starting up. Click on the button **login**
![image](https://github.com/heikkkk/IDATT2105-Semester-Project-Frontend/assets/89779148/c6ef3d21-555a-450f-86f3-1ab9c9a0ee27)
2. This is the login screen. Here you need to enter in a valid username and password. For testing purposes you can use the premade adminUser account:
- **Username**: adminUser
- **Password**: password123

You can optionally register your own user by clicking on **Sign up** and following the steps provided and then loggin with that user instead.
![image](https://github.com/heikkkk/IDATT2105-Semester-Project-Frontend/assets/89779148/74f64260-6e12-4c2b-983f-8f328483d9f3)
3. This is the home screen. From here you are able to play through your own quizzes and other public quizzes by clicking on them. You can also sort these quizzes by category, and you are able to search for quizzes by keywords in their title, category and the author who made them. You are also able to create quizzes by clicking on the **Create new quiz** button on the top left size of the screen.
  ![image](https://github.com/heikkkk/IDATT2105-Semester-Project-Frontend/assets/89779148/32de8fbe-2c9d-4c54-98d5-76c1c611fb58)

# Common Issues and Troubleshooting

## Issues with the Backend Server

1. **Is your Backend running?**: ~~Well you better go catch it~~ First, verify that the backend server process is active.

2. **Verify Server Status**: After starting the backend server, ensure it is running on localhost and listening on port 8080.

# CI/CD - Github Actions
## CI
Tests run continuously with the Continuous Integration (CI) pipeline through Github Actions. Our CI pipeline is designed to automatically execute npm commands to build the application and run unit tests. Additionally, we have a separate pipeline dedicated to running Cypress end-to-end (e2e) tests. This involves starting both the backend and frontend services as part of the workflow. It gets triggered by pull requests to the main branch, or if the [Backend Repository](https://github.com/heikkkk/IDATT2105-Semester-Project-Backend) requests a pull request to its main branch. Click [here](https://github.com/heikkkk/IDATT2105-Semester-Project-Backend/blob/main/.github/workflows/trigger-e2e-pipeline.yml) for more details.

## CD
Our Continuous Deployment (CD) pipeline automatically deploys the frontend application to GitHub Packages. This process is triggered whenever changes are pushed to the main branch. **IMPORTANT NOTE**: The deployment will only work if the version number in the package.json file is incrementet:
```json
{
  "name": "@heikkkk/idatt2105-semester-project-frontend",
  "version": "X.X.X",
  "repository": {
    "type": "git",
    "url": "git://github.com/heikkkk/IDATT2105-Semester-Project-Frontend.git"
  },
```

# Contributors
- Henrik Teksle Sandok
- Jens Christian Aanestad
- Andreas Kluge Svendsrud
- Anders Høvik
