import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ROUTES } from './app.routes'

import { SharedModule } from './shared/shared.module';

import { ApplicationErrorHandler } from './app.error-handler';
import { ErrorHandler } from '@angular/core';
import { LoginComponent } from './security/login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
    // RouterModule.forRoot(ROUTES)
    
  ],
  providers: [{provide: ErrorHandler,useClass:ApplicationErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
