import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { HomeComponent } from './home/home.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ImcFormComponent } from './imc-form/imc-form.component';
import { MejoramientoContinuoMenuComponent } from './mejoramiento-continuo-menu/mejoramiento-continuo-menu.component';
import { EtapaIdentificarComponent } from './etapa-identificar/etapa-identificar.component';
import { SaveDataBtnComponent } from './save-data-btn/save-data-btn.component';
import { EtapaAnalizarComponent } from './etapa-analizar/etapa-analizar.component';
import { DropImageBoxComponent } from './drop-image-box/drop-image-box.component';
import { InputTextComponent } from './input-text/input-text.component';
import { ImagesPlusTextComponent } from './images-plus-text/images-plus-text.component';
import { EtapaDesarrollarComponent } from './etapa-desarrollar/etapa-desarrollar.component';
import { AspectosMenuComponent } from './aspectos-menu/aspectos-menu.component';
import { DimensionesMenuComponent } from './dimensiones-menu/dimensiones-menu.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { EtapaPlanificarComponent } from './etapa-planificar/etapa-planificar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    HomeComponent,
    MainMenuComponent,
    ImcFormComponent,
    MejoramientoContinuoMenuComponent,
    EtapaIdentificarComponent,
    SaveDataBtnComponent,
    EtapaAnalizarComponent,
    DropImageBoxComponent,
    InputTextComponent,
    ImagesPlusTextComponent,
    EtapaDesarrollarComponent,
    AspectosMenuComponent,
    DimensionesMenuComponent,
    DatePickerComponent,
    EtapaPlanificarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    MatDatepickerModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
