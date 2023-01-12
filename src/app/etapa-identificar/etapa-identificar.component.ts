import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-etapa-identificar',
  templateUrl: './etapa-identificar.component.html',
  styleUrls: ['./etapa-identificar.component.css']
})
export class EtapaIdentificarComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      problema: new FormControl(''),
      mejoras: this.fb.array([])
    });

  }
  ngOnInit(): void {

  }


  get mejoras(): FormArray {
    return this.form.get('mejoras') as FormArray;
  }

  addMejora(): void {
    this.mejoras.push(new FormGroup({
      name: new FormControl('')
    })
    );
  }

  getFormControlValue(control: string) {
    return this.form.get(control)?.value;
  }
  saveData() {

    let validatedMejoras = []

    for (let mejora of this.mejoras.controls) {
      let newMejora = mejora.get('name')?.value
      if (newMejora !== '') {
        validatedMejoras.push(mejora);
      }
    }

    var data = {
      "problema": this.getFormControlValue('problema'),
      "mejoras": validatedMejoras
    }
  }




}
