import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-imc-form',
  templateUrl: './imc-form.component.html',
  styleUrls: ['./imc-form.component.css']
})

export class ImcFormComponent implements OnInit {
  form: FormGroup;
 
  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      member: new FormArray([
        new FormGroup({
          name: new FormControl('')
        })
      ])
    });
  }
  ngOnInit(): void {
    
  }

  get members(): FormArray {
    return this.form.get('member') as FormArray;
  }

  addMember() {
    this.members.push(new FormGroup({
        name: new FormControl('')
      })
    );
  }
}
