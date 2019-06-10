import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { DashbordComponent } from './content/dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';

import { ROUTES } from './app.routes'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    DashbordComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
