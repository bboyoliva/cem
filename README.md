# Cem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
 INSTALACION 
 Instalar Phyton 3 y marcar check de guardar path antes de compilar.

 -- CONFIG PROXY [NO REQUERIDO SI NO TRABAJAMOS CON UNO]
 npm config set registry http://registry.npmjs.org/
 npm config set proxy http://<username>:<password>@<proxy>:<port> 
 npm config set https-proxy http://<username>:<password>@<proxy>:<port> 
 npm config set http-proxy http://<username>:<password>@<proxy>:<port> 
 npm config set strict-ssl false
 
 -- SI LO TUVIERAMOS INSTALADO PREVIAMENTE
 npm uninstall @angular-devkit/build-angular
 -- 
 npm install --save-dev @angular-devkit/build-angular@latest
 npm install @angular/cli
 ng update @angular/cli @angular/core
 ng build
 ng serve

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
