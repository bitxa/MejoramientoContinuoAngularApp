import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})



export class DatePickerComponent {
  constructor(private fb: FormBuilder) { }

  selectedStartDate = new FormControl((new Date()).toISOString());

  getDate() {
      return this.selectedStartDate;
  }
} 
