import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { RouterModule, Routes } from '@angular/router'
import { GaragemComponent } from './garagem.component';

const ROUTES: Routes = [
  { path: '', component: GaragemComponent }
];
@NgModule({
  declarations: [
    GaragemComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class GaragemModule { }
