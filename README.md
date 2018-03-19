# Angular QuickStart

This repository holds AngularJS 2 boilerplate for building fast, robust, and adaptable web apps or sites

## Table of Contents
1. [Technologies](#technologies)
1. [Requirements](#requirements)
1. [Getting Started](#getting-started)
1. [Running the Project](#running-the-project)
1. [Project Structure](#project-structure)
1. [Author](#author)


## Technologies

To reduce the development efforts following technologies have been used to scaffolding the application
* Typescript 2
* Sass
* Pug
* Webpack 4
* Bootstrap 4

## Requirements

* [git](https://git-scm.com/)
* [node.js](https://nodejs.org/)  `^5.0.0`
* [yarn](https://yarnpkg.com/en/) `^0.23.0` or [npm](https://www.npmjs.com/) `^5.0.0`


## Getting Started

Clone this repo.
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
|`lint`             |Lints the project for potential errors|
|`lint:fix`         |Lints the project and fixes all correctable errors|
|`outdated`         |Lists outdated packages|

## Project Structure

The project structure used here is **fractal**, where functionality is grouped primarily by feature rather than file type. 
It aims to represent generally accepted guidelines and patterns for building scalable applications.

```
.
├── public                          # Static public assets
├── client                          # Application source code
│   ├── index.html                  # Main HTML page container for app
│   ├── main.js                     # Application bootstrap and rendering
│   ├── polyfills.js                # Browser normalization and polyfills
│   ├── vendor.js                   # External libraries
│   ├── app                         # Application module
│   │   ├── app.module.ts           # App module definition
│   │   ├── app-routing.ts          # Fractal route
│   │   ├── app.component.ts        # App module components
│   │   └── app.scss                # App module styles (applied globally)
│   ├── services                    # Services definition
│   ├── shared                      # Shared components
│   ├── website                     # Website module
│   │   ├── website.module.ts       # Website module definition
│   │   ├── website-routing.ts      # Fractal sub-routes
│   │   ├── website.component.ts    # Website component definition
│   │   ├── website.pug             # Website component template
│   │   ├── website.scss            # Website component styles
│   │   └── About                   # About component
│   │       ├── about.component.ts  # About component definition
│   │       ├── about.pug           # About component template
│   │       └── about.scss          # About component styles
│   └── stylesheets                 # Application-wide styles (generally settings)
└── webpack.config.js               # Webpack configuration
```

## Author
[Ritesh Ranjan](https://ritesrnjn.github.io)

