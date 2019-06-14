import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { RouterModule, Routes } from '@angular/router'
import { ClienteComponent } from './cliente.component';

const ROUTES: Routes = [
  { path: '', component: ClienteComponent }
];
@NgModule({
  declarations: [
    ClienteComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ClienteModule { }
