import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { RouterModule, Routes } from '@angular/router'
import { SaidaComponent } from './saida.component';

const ROUTES: Routes = [
  { path: '', component: SaidaComponent }
];
@NgModule({
  declarations: [
    SaidaComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class SaidaModule { }
