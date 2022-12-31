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
      item: new FormArray([
        new FormGroup({
          name: new FormControl('')
        })
      ])
    });
  }
  ngOnInit(): void {
  
  }

  getItems(form: FormGroup): FormArray {
    return form.get('item') as FormArray;
  }

  addItem(form: FormGroup): void {
    this.getItems(form).push(new FormGroup({
        name: new FormControl('')
      })
    );
  }
}
