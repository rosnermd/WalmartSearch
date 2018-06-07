# WalmartSearch

## Getting Started

### Prerequisites

1. NodeJs installed [Install](https://nodejs.org/en/)
2. AngularCLI installed (run 'npm install -g @angular/cli')

### Download and setup of code

1. Clone the repo ('git clone https://github.com/ctownbrownsfan/WalmartSearch.git')
2. Run 'npm install'
3. Replace '{API_KEY}' with your walmart api key in the 'src/server/config.js' file
    * you can obtain a key [here](https://developer.walmartlabs.com/page)

## Running the application

There are two ways to run this application.
- The first way is a single command that will run both the nodeJS backend server and angular dev server (Option A)
- The second way is to run each server independantly (Option B)

**Option A:**
1. run command 'npm run startAll'

**Option B:**
You will need two command windows

1. Startup the node sever: 'npm run startNode'
2. Startup the angular development server: 'npm start'

After you decide which option, open your browser to http://localhost:4400

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Live Documenation

A live version of the documentation is located [here](https://walmartsearch.azurewebsites.net)

If you would like to run the documentation locally, follow these steps:
1. Run 'npm run compodoc'
2. Browse to /documentation/index.html
