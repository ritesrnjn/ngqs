# Angular QuickStart

This repository holds AngularJS 2 boilerplate for building fast, robust, and adaptable web apps or sites

## Table of Contents
1. [Technologies](#technologies)
1. [Requirements](#requirements)
1. [Installation](#getting-started)
1. [Running the Project](#running-the-project)
1. [Project Structure](#project-structure)
1. [Testing](#testing)


## Technologies

To reduce the development efforts following technologies have been used to scaffolding the application
* Typescript 2
* Sass
* Pug
* Webpack 3
* Bootstrap 4

## Requirements

* [git](https://git-scm.com/)
* [node.js](https://nodejs.org/)  `^5.0.0`
* [yarn](https://yarnpkg.com/en/) `^0.23.0` or [npm](https://www.npmjs.com/) `^5.0.0`


### Installation

Clone this repo into new project folder (e.g., `my-proj`).
```bash
git clone  https://github.com/ritesrnjn/ngqs
cd ngqs
```
When that's done, install the project dependencies. It is recommended to use [Yarn](https://yarnpkg.com/) for deterministic dependency management, but `npm install` will suffice.

```bash
$ yarn  # Install project dependencies (or `npm install`)
```

## Running the Project

After completing the [installation](#installation) step, you're ready to start the project!

```bash
$ yarn start  # Start the development server (or `npm start`)
```

While developing, you will probably rely mostly on `yarn start`; however, there are additional scripts at your disposal:

|`yarn <script>`    |Description|
|-------------------|-----------|
|`start`            |Serves app at `localhost:3000`|
|`build`            |Builds the application to ./dist|
|`clean`            |Deletes precompiled application folder|
|`analyze`          |Runs webpack bundle analyser|
|`test`             |Runs unit tests with Jest|
|`test:watch`       |Runs `test` in watch mode to re-run tests when changed|
|`test:coverage`    |Runs `test` and shows summary|
|`lint`             |Lints the project for potential errors|
|`lint:fix`         |Lints the project and fixes all correctable errors|
|`check`            |Checks installed node packages for updates

## Project Structure

The project structure used here is **fractal**, where functionality is grouped primarily by feature rather than file type. 
It aims to represent generally accepted guidelines and patterns for building scalable applications.

```
.
├── build                    # All build-related code
├── public                   # Static public assets (not imported anywhere in source code)
├── server                   # Express application that provides webpack middleware
│   └── main.js              # Server application entry point
├── client                   # Application source code
│   ├── index.html           # Main HTML page container for app
│   ├── main.js              # Application bootstrap and rendering
│   ├── normalize.js         # Browser normalization and polyfills
│   ├── components           # Global Reusable Components
│   ├── containers           # Global Reusable Container Components
│   ├── layouts              # Components that dictate major page structure
│   │   └── PageLayout       # Global application layout in which to render routes
│   ├── pages                # Main route definitions and async split points
│   │   ├── index.js         # Bootstrap main application routes with store
│   │   ├── AppReg           # Fractal route
│   │   │   ├── index.js     # Route definitions and async split points
│   │   │   ├── assets       # Assets required to render components
│   │   │   ├── components   # Presentational React Components
│   │   │   └── routes **    # Fractal sub-routes (** optional)
│   │   └── Help             # Fractal route
│   │       ├── index.js     # Counter route definition
│   │       ├── container    # Connect components to actions and store
│   │       ├── modules      # Collections of reducers/constants/actions
│   │       └── routes **    # Fractal sub-routes (** optional)
│   ├── store                # Redux-specific pieces
│   │   ├── createStore.js   # Create and instrument redux store
│   │   └── reducers.js      # Reducer registry and injection
│   └── styles               # Application-wide styles (generally settings)
│ 
├── server                   # Express Server
│   ├── __tests__            # Unit tests
│   ├── mocks                # Mock JSON files
│   ├── models               # logic for modifying API response 
│   ├── routes               # All middleware routes
│   ├── utils                # Utility files
│   ├── views                # Pug templates
│   └── main.js              # Global Reusable Container Components
│ 
└── tests                    # Unit tests
```

## Author
[Ritesh Ranjan](https://ritesrnjn.github.io)

