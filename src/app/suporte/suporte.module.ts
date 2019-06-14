import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { RouterModule, Routes } from '@angular/router'
import { SuporteComponent } from './suporte.component';
const ROUTES: Routes = [
  { path: '', component: SuporteComponent }
];
@NgModule({
  declarations: [
    SuporteComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class SuporteModule { }
