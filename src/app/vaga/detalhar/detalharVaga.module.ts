import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { DetalharVagaComponent } from './detalharVaga.component';

const ROUTES: Routes = [
  { path: '', component: DetalharVagaComponent }
];
@NgModule({
  declarations: [
    DetalharVagaComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class DetalharVagaModule { }
