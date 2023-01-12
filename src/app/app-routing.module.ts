import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtapaAnalizarComponent } from './etapa-analizar/etapa-analizar.component';
import { EtapaDesarrollarComponent } from './etapa-desarrollar/etapa-desarrollar.component';
import { EtapaIdentificarComponent } from './etapa-identificar/etapa-identificar.component';
import { EtapaPlanificarComponent } from './etapa-planificar/etapa-planificar.component';
import { EtapaEjecutarComponent } from './etapa-ejecutar/etapa-ejecutar.component';
import { HomeComponent } from './home/home.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { EtapaVerificarComponent } from './etapa-verificar/etapa-verificar.component';
import { EtapaActuarComponent } from './etapa-actuar/etapa-actuar.component';
const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'menu', component:  MainMenuComponent},
    {path: 'identificar', component:EtapaIdentificarComponent},
    {path: 'analizar', component: EtapaAnalizarComponent},
    {path: 'desarrollar', component: EtapaDesarrollarComponent},
    {path: 'planificar', component: EtapaPlanificarComponent},
    {path: 'ejecutar', component: EtapaEjecutarComponent},
    {path: 'verificar', component: EtapaVerificarComponent},
    {path: 'actuar', component: EtapaActuarComponent},
    {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
