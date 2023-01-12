import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-etapa-ejecutar',
  templateUrl: './etapa-ejecutar.component.html',
  styleUrls: ['./etapa-ejecutar.component.css']
})
export class EtapaEjecutarComponent {
  form : FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      observaciones: new FormControl(''),
      evidencias: new FormControl('')
    })
  }

  saveData(){
    
  }
}
