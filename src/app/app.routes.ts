import { Routes } from '@angular/router';

import { LoginComponent } from './security/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GaragemComponent } from './garagem/garagem.component';
import { IncluirGaragemComponent } from './garagem/incluir/IncluirGaragem.component';
import { VagaComponent } from './vaga/vaga.component';
import { IncluirVagaComponent } from './vaga/incluir/IncluirVaga.component';

export const ROUTES: Routes = [

    { path: 'login/:to', component: LoginComponent},
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'garagem', component: GaragemComponent},
    { path: 'garagem/incluir', component: IncluirGaragemComponent},
    { path: 'vaga', component: VagaComponent},
    { path: 'vaga/incluir', component: IncluirVagaComponent},
]