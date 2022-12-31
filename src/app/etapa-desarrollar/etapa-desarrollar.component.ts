import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-etapa-desarrollar',
  templateUrl: './etapa-desarrollar.component.html',
  styleUrls: ['./etapa-desarrollar.component.css']
})
export class EtapaDesarrollarComponent {
  indicadorPorcentajeForm: FormGroup;
  cambiosForm : FormGroup;

  constructor(private fb: FormBuilder) {
    this.indicadorPorcentajeForm = this.fb.group({
      item: new FormArray([
        new FormGroup({
          indicador: new FormControl(),
          porcentaje: new FormControl()
        })
      ])
    })

    this.cambiosForm = this.fb.group({
      item: new FormArray([
        new FormGroup({
          cambio: new FormControl(),
        })
      ])
    })
  }

  getItems(form: FormGroup): FormArray {
    return this.indicadorPorcentajeForm.get('item') as FormArray;
  }

  addItem(form: FormGroup) {
    this.getItems(form).push(new FormGroup({
        name: new FormControl('')
      })
    );
  }

}