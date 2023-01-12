import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-etapa-desarrollar',
  templateUrl: './etapa-desarrollar.component.html',
  styleUrls: ['./etapa-desarrollar.component.css']
})
export class EtapaDesarrollarComponent {
  form: FormGroup;


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      objetivo_general: new FormControl(''),
      objetivos_especificos: new FormControl(''),
      indicadores_porcentajes: this.fb.array([
        this.fb.group({
          indicador: new FormControl(''),
          porcentaje: new FormControl('')
        })
      ]),
      cambios: this.fb.array([
        this.fb.group({
          cambio: new FormControl('')
        })
      ])
    })
  }

  get indicadores_porcentajes(): FormArray {
    return this.form.get('indicadores_porcentajes') as FormArray;
  }

  get cambios(): FormArray {
    return this.form.get('cambios') as FormArray;
  }

  addIndicador() {
    this.indicadores_porcentajes.push(new FormGroup({
      indicador: new FormControl(''),
      porcentaje: new FormControl('')
    }));
  }

  addCambio(){
    this.cambios.push(new FormGroup({
      cambio: new FormControl('')
    }));
  }

}