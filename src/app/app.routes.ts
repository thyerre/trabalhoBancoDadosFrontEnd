import { Routes } from '@angular/router';

import { LoginComponent } from './security/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GaragemComponent } from './garagem/garagem.component';
import { IncluirGaragemComponent } from './garagem/incluir/IncluirGaragem.component';
import {AlterarGaragemComponent } from './garagem/alterar/alterarGaragem.component';
import {DetalharGaragemComponent } from './garagem/detalhar/detalharGaragem.component';
import { VagaComponent } from './vaga/vaga.component';
import { IncluirVagaComponent } from './vaga/incluir/IncluirVaga.component';

export const ROUTES: Routes = [

    { path: 'login/:to', component: LoginComponent},
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'garagem', component: GaragemComponent},
    { path: 'garagem/incluir', component: IncluirGaragemComponent},
    { path: 'garagem/alterar/:id', component: AlterarGaragemComponent},
    { path: 'garagem/detalhar/:id', component: DetalharGaragemComponent},
    // { path: '', loadChildren: './layout/home/home.module#HomeModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
    // { path: 'cliente', loadChildren: './cliente/cliente.module#ClienteModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
    // { path: 'cliente/incluir', loadChildren: './cliente/incluir/incluir.module#IncluirModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]}, 
    // { path: 'cliente/alterar/:id', loadChildren: './cliente/alterar/alterar.module#AlterarModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]}, 
    // { path: 'cliente/detalhar/:id', loadChildren: './cliente/detalhar/detalhar.module#DetalharModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]}, 
    // { path: 'produto', loadChildren: './produto/produto.module#ProdutoModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
    // { path: 'produto/incluir', loadChildren: './produto/incluir/incluir.module#IncluirModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
    // { path: 'produto/alterar/:id', loadChildren: './produto/alterar/alterar.module#AlterarModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
    // { path: 'produto/detalhar/:id', loadChildren: './produto/detalhar/detalhar.module#DetalharModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]}, 
    // { path: 'saida', loadChildren: './saida/saida.module#SaidaModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
    // { path: 'saida/incluir', loadChildren: './saida/incluir/incluir.module#IncluirModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
    // { path: 'saida/alterar/:id', loadChildren: './saida/alterar/alterar.module#AlterarModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
    // { path: 'saida/detalhar/:id', loadChildren: './saida/detalhar/detalhar.module#DetalharModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]}, 
    // { path: 'fornecedor', loadChildren: './fornecedor/fornecedor.module#FornecedorModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
    // { path: 'fornecedor/incluir', loadChildren: './fornecedor/incluir/incluir.module#IncluirModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
    // { path: 'fornecedor/alterar/:id', loadChildren: './fornecedor/alterar/alterar.module#AlterarModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
    // { path: 'fornecedor/detalhar/:id', loadChildren: './fornecedor/detalhar/detalhar.module#DetalharModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]}, 
    // { path: 'parcela', loadChildren: './parcela/parcela.module#ParcelaModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
    // { path: 'parcela/incluir', loadChildren: './parcela/incluir/incluir.module#IncluirModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]}, 
    // { path: 'parcela/alterar/:id', loadChildren: './parcela/alterar/alterar.module#AlterarModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]}, 
    // { path: 'user', loadChildren: './user/user.module#UserModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
    // { path: 'user/incluir', loadChildren: './user/incluir/incluir.module#IncluirModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
    // { path: 'user/alterar/:id', loadChildren: './user/alterar/alterar.module#AlterarModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
// 
// 
    // { path: 'suporte', loadChildren: './suporte/suporte.module#SuporteModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
    // { path: 'suporte/incluir', loadChildren: './suporte/incluir/incluir.module#IncluirModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
    // { path: 'suporte/alterar/:id', loadChildren: './suporte/alterar/alterar.module#AlterarModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
    // { path: 'time', loadChildren: './time/time.module#TimeModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
    // { path: 'time/incluir', loadChildren: './time/incluir/incluir.module#IncluirModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
    // { path: 'time/alterar/:id', loadChildren: './time/alterar/alterar.module#AlterarModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
    // { path: 'contato', loadChildren: './contato/contato.module#ContatoModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
    // { path: 'freepages', loadChildren: './freepages/freepages.module#FreepagesModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
    // { path: 'freepages/alterar/:id', loadChildren: './freepages/alterar/alterar.module#AlterarModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
    // { path: 'freepages/incluir', loadChildren: './freepages/incluir/incluir.module#IncluirModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
    // { path: 'menu', loadChildren: './menu/menu.module#MenuModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
    // { path: 'menu/alterar/:id', loadChildren: './menu/alterar/alterar.module#AlterarModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
    // { path: 'menu/incluir', loadChildren: './menu/incluir/incluir.module#IncluirModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]}, 
    // { path: 'porque', loadChildren: './porque/porque.module#PorqueModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]},
    // { path: 'porque/incluir', loadChildren: './porque/incluir/incluir.module#IncluirModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]}, 
    // { path: 'porque/alterar/:id', loadChildren: './porque/alterar/alterar.module#AlterarModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]}, 
// 
    // { path: 'settings', loadChildren: './settings/settings.module#SettingsModule',canLoad:[LoggedInGuard],canActivate:[LoggedInGuard]}, 
    // 
    // { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' ,canLoad:[LoggedInGuard]},
    // { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
    { path: 'vaga', component: VagaComponent},
    { path: 'vaga/incluir', component: IncluirVagaComponent},
]