import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-etapa-planificar',
  templateUrl: './etapa-planificar.component.html',
  styleUrls: ['./etapa-planificar.component.css']
})
export class EtapaPlanificarComponent {
  form: FormGroup;

  startDate: string = "";
  endDate: string = "";

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      cambios: this.fb.array([
        new FormGroup({
          actividad: new FormControl(''),
          donde: new FormControl(''),
          fecha_inicio: new FormControl(''),
          fecha_fin: new FormControl(''),
          recursos: new FormControl(''),
          responsables: new FormControl(''),
        })
      ])
    })
  }

  get cambios(): FormArray {
    return this.form.get('cambios') as FormArray;
  }

  addCambio() {
    this.cambios.push(new FormGroup({
      actividad: new FormControl(''),
      donde: new FormControl(''),
      fecha_inicio: new FormControl(''),
      fecha_fin: new FormControl(''),
      recursos: new FormControl(''),
      responsables: new FormControl(''),
    })
    );
  }

  receiveStartDate($event: string) {
    this.startDate = $event;
  }

  receiveEndDate($event: string) {
    this.endDate = $event;
  }

}



