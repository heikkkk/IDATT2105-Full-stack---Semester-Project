# Quizopia Frontend

This repository contains the frontend code for our Quiz Application, Quizopia.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

# Setup
To run the backend server, follow these steps:

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

# Configuration

# Testing
## Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

## Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

# Common Issues and Troubleshooting

# CI/CD - Github Actions

