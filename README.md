Tema 
file:///var/www/html/source/particular/template/material-dashboard-html-v2.1.1/material-dashboard-html-v2.1.1/examples/dashboard.html


tutorial de como alterar a table 
https://www.youtube.com/watch?v=qj_-Z4mn8_Q

documentação google chart 
https://gmazzamuto.github.io/ng2-google-charts/
https://www.npmjs.com/package/angular2-google-chart


ng g c empresa --spec=false
  create src/app/empresa/empresa.component.css (0 bytes)
  create src/app/empresa/empresa.component.html (26 bytes)
  create src/app/empresa/empresa.component.ts (273 bytes)
ng g m empresa --spec=false
  create src/app/empresa/empresa.module.ts (191 bytes)

cd src/app/empresa/
    ng g s empresa --spec=false
        create src/app/empresa/empresa.service.ts (113 bytes)

criar com php
criar o arquivo.model.ts 
adicionar o arquivo.model.ts dentro do component e do service

ficando assim. 
ng g c cliente --spec=false;
ng g m cliente --spec=false;
cd src/app/cliente/;
ng g s cliente --spec=false;
ng g c incluir --spec=false;
ng g m incluir --spec=false;
ng g c alterar --spec=false;
ng g m alterar --spec=false;
ng g c detalhar --spec=false;
ng g m detalhar --spec=false;
cd ../../../../;
sudo chmod 777 -R ipeweb_site_adm_frontend;

tenho que criar o model.ts na mão.
cd src/app/delivery/


ng g c menu --spec=false;
ng g m menu --spec=false;
cd src/app/menu/;
ng g s menu --spec=false;
cd ../../../../;
sudo chmod 777 -R escola;

ng g c alterar --spec=false;
ng g m alterar --spec=false;
cd ../../../../;
sudo chmod 777 -R escola;



ir no app/app.module.ts e retirar a inclusao do service colocando em shared module
depois adicionar as rotas em app routes


#Tutorial Electron https://angularfirebase.com/lessons/desktop-apps-with-electron-and-angular/
#Youtube https://www.youtube.com/watch?v=u_vMChpZMCk&t=517s
vá em /home/kleber/angular/escola/src/index.html e altere
  <base href="/"> para <base href="./">
npm install electron --save-dev
criar o main.js na raiz

primeiro tenho que rodar
If you're running for the first time, you need to use `npm run electron-build` or just run `ng build --prod`
depois gerar para deskotp no sistema desejado

linux:
  electron-packager . electron-tutorial-app --overwrite --asar=true --platform=linux --arch=x64 --icon=assets/icons/png/1024x1024.png --prune=true --out=release-builds
Windows:
  electron-packager . electron-tutorial-app --overwrite --asar=true --platform=win32 --arch=ia32 --icon=assets/icons/win/icon.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="Electron Tutorial App"
Mac:
  electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
