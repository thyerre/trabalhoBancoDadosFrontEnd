import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ROUTES } from './app.routes';

import { SharedModule } from './shared/shared.module';

import { ApplicationErrorHandler } from './app.error-handler';
import { ErrorHandler } from '@angular/core';
import { LoginComponent } from './security/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GaragemComponent } from './garagem/garagem.component';
import { IncluirGaragemComponent } from './garagem/incluir/IncluirGaragem.component';
import { AlterarGaragemComponent } from './garagem/alterar/alterarGaragem.component';
import { DetalharGaragemComponent } from './garagem/detalhar/detalharGaragem.component';
import { VagaComponent } from './vaga/vaga.component';
import { IncluirVagaComponent } from './vaga/incluir/IncluirVaga.component';
import { DetalharVagaComponent } from './vaga/detalhar/detalharVaga.component';
import { AlterarVagaComponent } from './vaga/alterar/alterarVaga.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    GaragemComponent,
    IncluirGaragemComponent,
    AlterarGaragemComponent,
    DetalharGaragemComponent,
    AlterarVagaComponent,
    DetalharVagaComponent,
    VagaComponent,
    IncluirVagaComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
    // RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide: ErrorHandler, useClass: ApplicationErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
