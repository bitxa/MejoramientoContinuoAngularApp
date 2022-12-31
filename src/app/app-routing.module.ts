import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtapaAnalizarComponent } from './etapa-analizar/etapa-analizar.component';
import { EtapaDesarrollarComponent } from './etapa-desarrollar/etapa-desarrollar.component';
import { EtapaIdentificarComponent } from './etapa-identificar/etapa-identificar.component';
import { EtapaPlanificarComponent } from './etapa-planificar/etapa-planificar.component';
import { HomeComponent } from './home/home.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'menu', component:  MainMenuComponent},
    {path: 'identificar', component:EtapaIdentificarComponent},
    {path: 'analizar', component: EtapaAnalizarComponent},
    {path: 'desarrollar', component: EtapaDesarrollarComponent},
    {path: 'planificar', component: EtapaPlanificarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
