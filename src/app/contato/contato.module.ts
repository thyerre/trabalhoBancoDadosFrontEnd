import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { RouterModule, Routes } from '@angular/router'
import { ContatoComponent } from './contato.component';

const ROUTES: Routes = [
  { path: '', component: ContatoComponent }
];
@NgModule({
  declarations: [
    ContatoComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ContatoModule { }
