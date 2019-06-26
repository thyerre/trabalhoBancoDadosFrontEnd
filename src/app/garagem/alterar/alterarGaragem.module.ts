import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { RouterModule, Routes } from '@angular/router'
import { AlterarGaragemComponent } from './alterarGaragem.component';

const ROUTES: Routes = [
  { path: '', component: AlterarGaragemComponent }
];
@NgModule({
  declarations: [
    AlterarGaragemComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class AlterarGaragemModule { }
