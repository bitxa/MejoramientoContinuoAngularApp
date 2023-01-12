import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-etapa-verificar',
  templateUrl: './etapa-verificar.component.html',
  styleUrls: ['./etapa-verificar.component.css']
})
export class EtapaVerificarComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      situacion_actual: new FormControl(''),
      indicadores: new FormArray([
        new FormGroup({
          indicador_id: new FormControl(),
          porcentaje: new FormControl()
        })
      ])
    })
  }

  indicadores(): FormArray {
    return this.form.get('indicadores') as FormArray;
  }

  addIndicador() {
    this.indicadores().push(new FormGroup({
      indicador_id: new FormControl(''),
      porcentaje: new FormControl('')
    })
    );
  }

  
}
