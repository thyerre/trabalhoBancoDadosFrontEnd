import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { RouterModule, Routes } from '@angular/router'
import { FornecedorComponent } from './fornecedor.component';

const ROUTES: Routes = [
  { path: '', component: FornecedorComponent }
];
@NgModule({
  declarations: [
    FornecedorComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class FornecedorModule { }
