import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './dashboard.component';

const ROUTES: Routes = [
  { path: '', component: DashboardComponent }
];
@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class DashboardModule { }
