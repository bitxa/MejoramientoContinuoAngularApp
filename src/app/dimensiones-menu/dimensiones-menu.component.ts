import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dimensiones-menu',
  templateUrl: './dimensiones-menu.component.html',
  styleUrls: ['./dimensiones-menu.component.css']
})
export class DimensionesMenuComponent {
  items: Array<any> = [
    { name: 'Seguridad', value: 'seguridad' },
    { name: 'Aceptabilidad', value: 'aceptabilidad' },
    { name: 'Efectividad', value: 'efectividad' },
    { name: 'Equidad', value: 'equidad' },
    { name: 'Accesabilidad', value: 'oportunidad' },
    { name: 'Continuidad', value: 'continuidad' },
    { name: 'Eficiencia', value: 'eficiencia' },
  ];

  dimensionesForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dimensionesForm = this.fb.group({
      checkArray: this.fb.array([], Validators.required)
    });
  }

  onCheckboxChange(event: any) {
    const checkArray: FormArray = this.dimensionesForm.get('checkArray') as FormArray;

    if (event.target.checked) {
      checkArray.push(new FormControl(event.target.value));
    }else{
      let i : number = 0;
      checkArray.controls.forEach((item:any) => {
        if(item.value === event.target.value){
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}

