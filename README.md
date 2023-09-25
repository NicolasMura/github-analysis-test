# Github Analysis Test

Frontend (Angular) monorepo for a technical test.

- [Github Analysis Test](#github-analysis-test)
  - [Requirements](#requirements)
  - [Getting Started](#getting-started)
  - [Dev Setup](#dev-setup)
  - [Cheatsheet](#cheatsheet)

## Requirements

To contribute to this project and run it locally, you will need:

- [Node JS ^16.14.0 || ^18.10.0](https://nodejs.org/en)
- [Angular 16.x](https://angular.io/guide/versions)
- [Typescript >=4.9.3 <5.2.0](https://www.typescriptlang.org)
- [RXJS ^6.5.3 || ^7.4.0](https://rxjs.dev/)

## Getting Started

Technologies used across the project:

- framework: [Angular](https://angular.io/)
- monorepo: [Nx](https://www.nx.dev)
- standalone components
- components library: [Angular Material](https://material.angular.io/components)
- CSS framework: [Tailwind CSS](https://tailwindcss.com)
- state manager: [Elf](https://ngneat.github.io/elf/) (super simple state manager fueled by RxJS and integrated
  in [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd))
- unit testing: [Jest](https://jestjs.io)
- integration testing: [Cypress](https://www.cypress.io)

## Dev Setup

```bash
  # install the dependencies
  yarn
  yarn add -g nx # not mandatory, you can use `npx nx` instead

  # Add your own Github access token in `environment.local.ts` (to be improved in a next version)
  cp environments/environment.dev.ts environments/environment.local.ts

  # run the app - it will start a server and livereload the app
  nx serve
```

## Cheatsheet

This project was generated using [Nx](https://nx.dev) and below interactive command:

```bash
  npx create-nx-workspace@latest github-analysis-test --preset=angular-monorepo --appName=frontend --ci=github --e2eTestRunner=cypress --interactive=false --routing=true --standaloneApi=true --style=scss --nxCloud=true --packageManager=yarn
```

To configure Material:

```shell
  yarn add @angular/material
  npx nx g @angular/material:ng-add --project=frontend
```

To add Tailwind:

```shell
  npx nx g @nx/angular:setup-tailwind frontend
```

To add an Angular component (page like) to the frontend app:

```shell
  npx nx generate @nx/angular:component --name=home --project=frontend --standalone=true --skipTests=true --style=none --no-interactive
```
