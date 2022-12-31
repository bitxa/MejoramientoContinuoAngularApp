import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';

@Component({
  selector: 'app-etapa-analizar',
  templateUrl: './etapa-analizar.component.html',
  styleUrls: ['./etapa-analizar.component.css']
})

export class EtapaAnalizarComponent {
  files: File[] = [];
  causasTextVisible: Boolean = false;
  imagesBoxVisible: Boolean = false;

  constructor(public fb: FormBuilder) { }


  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files = this.files.filter(file => file !== event)
  }



  inputTypeOpForm = this.fb.group({
    op: ['']
  })

  get inputTypeOp() {
    return this.inputTypeOpForm.get('op');
  }


  onChange() {
    //alert(JSON.stringify(this.inputTypeOpForm.value));
    switch (this.inputTypeOpForm.value.op) {
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


}
