import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { RouterModule, Routes } from '@angular/router'
import { UserComponent } from './user.component';

const ROUTES: Routes = [
  { path: '', component: UserComponent }
];
@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class UserModule { }
