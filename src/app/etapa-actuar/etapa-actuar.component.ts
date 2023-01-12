import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-etapa-actuar',
  templateUrl: './etapa-actuar.component.html',
  styleUrls: ['./etapa-actuar.component.css']
})
export class EtapaActuarComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      situacion_actual: new FormControl(''),

      aprobado: new FormGroup({
        nombres: new FormControl(''),
        cargo: new FormControl('')
      }),

      revisado: new FormGroup({
        nombres: new FormControl(''),
        cargo: new FormControl('')
      }),

      elaboradores: new FormArray([
        new FormGroup({
          nombres: new FormControl(''),
          cargo: new FormControl('')
        })
      ])
    });
  }


  getFormControlValue(control: string) {
    return this.form.get(control)?.value;
  }

  get elaboradores() {
    return this.form.get('elaboradores') as FormArray;
  }

  addElaborador() {
    this.elaboradores.push(
      new FormGroup({
        nombres: new FormControl(''),
        cargo: new FormControl('')
      })
    );
    this.saveData();
  }

  saveData() {

    let validatedAprobado = {
      "nombres": this.form.get('aprobado')?.value.nombres,
      "cargo":  this.form.get('aprobado')?.value.cargo
    }

    let validatedRevisado = {
      "nombres": this.form.get('revisado')?.value.nombres,
      "cargo":  this.form.get('revisado')?.value.cargo
    }

    let validatedElaboradores = {

    }
  
    var data = {
      "situacion_actual": this.getFormControlValue("situacion_actual"),
      "aprobado": validatedAprobado,
      "revisado": validatedRevisado,
      "elaboradores": validatedElaboradores
    }

    

  }



}
