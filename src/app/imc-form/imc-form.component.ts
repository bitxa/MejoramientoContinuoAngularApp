import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-imc-form',
  templateUrl: './imc-form.component.html',
  styleUrls: ['./imc-form.component.css']
})

export class ImcFormComponent {
  imcForm: FormGroup;

  startDate: string = "";
  endDate: string = "";
  ciclo: number = 0;
  constructor(private fb: FormBuilder) {
    this.imcForm = this.fb.group({
      establecimiento: new FormControl(''),
      tipologia: new FormControl(''),
      zona: new FormControl(''),
      provincia: new FormControl(''),
      distrito: new FormControl(''),
      servicio: new FormControl(''),
      responsable: new FormControl(''),
      integrantes: this.fb.array([]),
      ciclo: new FormControl(this.ciclo),
    });
  }

  ngOnInit() {
    this.addIntegrante();
  }

  get integrantes(): FormArray {
    return this.imcForm.get('integrantes') as FormArray;
  }

  addIntegrante() {
    this.integrantes.push(
      this.fb.group({
        name: new FormControl('', Validators.required),
      })
    );
  }

  getFormControlValue(control: string) {
    return this.imcForm.get(control)?.value;
  }

  receiveStartDate($event: string) {
    this.startDate = $event;
  }

  receiveEndDate($event: string) {
    this.endDate = $event;
  }

  saveData() {

    let validatedIntegrantes = []

    for (let integrante of this.integrantes.controls) {
      let newIntegrante = integrante.get('name')?.value
      if (newIntegrante !== '') {
        validatedIntegrantes.push(newIntegrante);
      }
    }

    var data = {
      "establecimiento": this.getFormControlValue('establecimiento'),
      "tipologia": this.getFormControlValue('tipologia'),
      "zona": this.getFormControlValue('zona'),
      "provincia": this.getFormControlValue('provincia'),
      "distrito": this.getFormControlValue('distrito'),
      "servicio": this.getFormControlValue('servicio'),
      "responsable": this.getFormControlValue('responsable'),
      "integrantes": validatedIntegrantes,
      "ciclo": this.ciclo,
      "inicio": this.startDate,
      "fin": this.endDate,
    }
  }
}
