import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { RouterModule, Routes } from '@angular/router'
import { DetalharGaragemComponent } from './detalharGaragem.component';

const ROUTES: Routes = [
  { path: '', component: DetalharGaragemComponent }
];
@NgModule({
  declarations: [
    DetalharGaragemComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class DetalharGaragemModule { }
