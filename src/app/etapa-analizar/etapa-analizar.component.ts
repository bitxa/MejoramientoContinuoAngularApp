import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';

@Component({
  selector: 'app-etapa-analizar',
  templateUrl: './etapa-analizar.component.html',
  styleUrls: ['./etapa-analizar.component.css']
})

export class EtapaAnalizarComponent {
  causasFiles: File[] = [];
  efectosFiles : File[] = [];
  aspecto : string = "";
  dimensiones : string[] = [];

  causasTextVisible: Boolean = false;
  imagesBoxVisible: Boolean = false;
  form: FormGroup;  



  constructor(public fb: FormBuilder) {
    this.form = fb.group({
      ambito : new FormControl(),
      dimensiones : new FormControl(),
    });
   }

  get inputTypeOp() {
    return this.form.get('op');
  }

  onChange() {
    //alert(JSON.stringify(this.inputTypeOpForm.value));
    switch (this.form.value.op) {
      case 'oi':
        this.causasTextVisible = false;
        this.imagesBoxVisible = true;
        break;
      case 'ot':
        this.causasTextVisible = true;
        this.imagesBoxVisible = false;
        break;
      case 'it':
        this.causasTextVisible = true;
        this.imagesBoxVisible = true;
        break;
    }

  }

  receiveCausasFiles($event: any[]) {
    this.causasFiles = $event;
  }
  receiveEfectosFiles($event: any[]) {
    this.efectosFiles = $event;
  }

  receiveSelectedAspecto($event : string){
    this.aspecto = $event;
  }

  receiveSelectedDimensiones($event : string[]){
    this.dimensiones = $event;
  }

  save(){
    var data = {
      "causas" : this.causasFiles,
      "efectos" : this.efectosFiles,
      "aspecto" : this.aspecto,
      "dimensiones" : this.dimensiones
    }  

    console.log(data);
  }

}
