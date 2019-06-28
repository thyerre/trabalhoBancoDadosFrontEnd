import { Routes } from '@angular/router';

import { LoginComponent } from './security/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GaragemComponent } from './garagem/garagem.component';
import { IncluirGaragemComponent } from './garagem/incluir/IncluirGaragem.component';
import {AlterarGaragemComponent } from './garagem/alterar/alterarGaragem.component';
import {DetalharGaragemComponent } from './garagem/detalhar/detalharGaragem.component';
import { VagaComponent } from './vaga/vaga.component';
import { IncluirVagaComponent } from './vaga/incluir/IncluirVaga.component';
import { AlterarVagaComponent } from './vaga/alterar/alterarVaga.component';
import { DetalharVagaComponent } from './vaga/detalhar/detalharVaga.component';

export const ROUTES: Routes = [

    { path: 'login/:to', component: LoginComponent},
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'garagem', component: GaragemComponent},
    { path: 'garagem/incluir', component: IncluirGaragemComponent},
    { path: 'garagem/alterar/:id', component: AlterarGaragemComponent},
    { path: 'garagem/detalhar/:id', component: DetalharGaragemComponent},
    { path: 'vaga', component: VagaComponent},
    { path: 'vaga/incluir', component: IncluirVagaComponent},
    { path: 'vaga/alterar/:id', component: AlterarVagaComponent},
    { path: 'vaga/detalhar/:id', component: DetalharVagaComponent},
]