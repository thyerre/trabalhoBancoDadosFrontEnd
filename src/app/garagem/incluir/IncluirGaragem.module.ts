import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { RouterModule, Routes } from '@angular/router'
import { IncluirGaragemComponent } from './IncluirGaragem.component';

const ROUTES: Routes = [
  { path: '', component: IncluirGaragemComponent }
];
@NgModule({
  declarations: [
    IncluirGaragemComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class IncluirGaragemModule { }
