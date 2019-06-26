import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AlterarVagaComponent } from './alterarVaga.component';

const ROUTES: Routes = [
  { path: '', component: AlterarVagaComponent }
];
@NgModule({
  declarations: [
    AlterarVagaComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class AlterarVagaModule { }
