import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { IncluirVagaComponent } from './IncluirVaga.component';

const ROUTES: Routes = [
  { path: '', component: IncluirVagaComponent }
];
@NgModule({
  declarations: [
    IncluirVagaComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class IncluirVagaModule { }
