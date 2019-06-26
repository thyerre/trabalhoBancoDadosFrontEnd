import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { VagaComponent } from './vaga.component';

const ROUTES: Routes = [
  { path: '', component: VagaComponent }
];
@NgModule({
  declarations: [
    VagaComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class VagaModule { }
