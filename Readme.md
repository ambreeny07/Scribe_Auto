# End to End Web Automation Testing

## Prerequisite

- Node (v21.7.0) or later version [link](https://nodejs.org/dist/v21.7.0/node-v21.7.0-x64.msi)
- VS Code (v1.87.0S) or later version [link](https://code.visualstudio.com/download#)

## Setup Windows and Mac OS

### Install the node and virtual studio code

- Download node.js (v21.7.0) or later version [link](https://nodejs.org/dist/v21.7.0/node-v21.7.0-x64.msi)
- Install node.msi file
- Set environment variable for node
- To check the node version by running following command
   `node --version`
- Download and install Visual Studio Code(v1.87.0S) or later version [link](https://code.visualstudio.com/docs/?dv=win)

### Install required packages

- Clone Repository:
- Open command prompt and Navigating to project Directory
- Run command  `npm install`

## Project Structure

- ### BDD Cypress Feature Files: `./cypress/e2e/features/`

   - This directory contains all the feature files written in Gherkin syntax for Behavior Driven Development (BDD).

- ### Step Definitions: `./cypress/e2e/step_definitions/`

   - Here lies the step definitions corresponding to the feature files. These files interpret the Gherkin steps into - actual Cypress commands.

- ### Page Objects: `./cypress/pages/`

   - This directory holds the page objects or locators used to interact with the web elements on different pages.

- ### Cypress Commands: `./cypress/support/commands.js`

   - Custom Cypress commands, if any, are defined in this directory to enhance reusability and maintainability of test scripts.

## Open project and run the tests

- Open the project in VS Code
- Open Terminal in VS Code
- For UI Cypress Run Command `npx cypress open` It will open the UI of cypress and shows all feature files
- For headless Run Command `npx cypress run`

## How to generate automation test reports

- After Running Test cases Following command will Generate Test Report.
   `npm run report`
- Report file will be generated in the `./reports` folder.
- Open the report `index.html` into browser
