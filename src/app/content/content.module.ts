import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { DashbordComponent } from './dashbord/dashbord.component';
@NgModule({
  declarations: [PerfilComponent, DashbordComponent],
  imports: [
    CommonModule
  ]
})
export class ContentModule {
}
