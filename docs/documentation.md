# Udagram

## Getting Started

This repo contains an app for demonstrating CI/CD orchestration with AWS as the primary cloud provider and circle-ci for CI/CD automation.

## Required Technologies
This application makes use of the following libraries:
- AWS RDS (Postgres) for the database
- Elasticbeanstalk for serving api logic
- AWS S3 for static file storage and web hosting
- Node/Express for the application api logic
- Angular/Javascript for the frontend logic
- Dotenv from npm for managing environment variables
- Sequelize for managing migrations
- Jsonwebtoken from npm for working with JWTs
- Jasmine from npm for testing
- CircleCI for CI/CD integration
- AWS/EB CLI for deployment automation

## Installation

### 1. Installation Steps

Provision the necessary AWS services needed for running the application:

1. In AWS, provision a publicly available RDS database running Postgres.
1. In AWS, provision a s3 bucket for hosting the uploaded files.
1. Export the ENV variables needed or use a package like [dotnev](https://www.npmjs.com/package/dotenv)/.
1. From the root of the repo, navigate udagram-api folder `cd starter/udagram-api` to install the node_modules `npm install`. After installation is done start the api in dev mode with `npm run dev`.
1. Without closing the terminal in step 1, navigate to the udagram-frontend `cd starter/udagram-frontend` to intall the node_modules `npm install`. After installation is done start the api in dev mode with `npm run start`.

### 3. Tests

This project contains two different test suite: unit tests and End-To-End tests(e2e). Follow these steps to run the tests.

1. `cd starter/udagram-frontend`
1. `npm run test`
1. `npm run e2e`

There are no Unit test on the back-end(api)

### Unit Tests:

Unit tests are using the Jasmine Framework.

### End to End Tests:

The e2e tests are using Protractor and Jasmine.

## Continuous Integration & Deployment

Provision Circle-CI for the repository and configure all project level environment variables as indicated on each `env.example` file present in the `udagram-api` and `udagram-frontend` directories of the application.

Create a `.circleci/config.yml` file on the root of the repository and configure all steps required to build on CircleCI and deploy the project to AWS.

Project level commands have been provided:

- `install:api` installs all app api dependencies
- `start:api:dev` starts the app api in development mode
- `start:api` starts the app api in live mode
- `build:api` builds the app api for production
- `deploy:api` deploys the app api to AWS Elasticbeanstalk
- `install:frontend` installs all app frontend dependencies
- `config:frontend` sets up frontend environment variables
- `config:frontend` sets up frontend environment variables
- `start:frontend` starts the frontend app
- `build:frontend` builds the frontend app
- `deploy:frontend` deploys the frontend app to AWS S3
- `test:frontend` will run frontend unit tests
- `test:e2e:frontend` will run frontend end to end tests
- `deploy` will deploy the entire application in a single command

## Pipeline Process

The following steps explain the pipeline process from code commit to CI/CD:

- Changes are made in a local repository and commited to the remote source
- Circle-CI picks up the commit and runs the build and deploy scripts present in the configuration file against it
- If the entire process is successful, applictation is deployed to AWS, else, a failure is returned with the exact failure script and reasons for failure.
- A refactor commit can be made, and the entire process is repeated again, until every script passes. 
