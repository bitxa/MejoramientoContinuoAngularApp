import { Platform } from '@angular/cdk/platform';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE, NativeDateAdapter } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})

export class DatePickerComponent {
  form: FormGroup;
  date : Date = new Date();
  today : string = this.date.getDate().toString()+ '/'+ 
  (this.date.getMonth().valueOf() + 1).toString()
  + '/' + this. date.getFullYear().toString();

  outputDate : string = "";

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      date: new FormControl(this.today)
    });
  }

  dateChangeHandler(date: Date) {
    const stringDate: string = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    this.form.get('date')?.setValue(stringDate)
    this.outputDate = stringDate;
    this.sendDate();
  }


  @Output() dateSender = new EventEmitter<string>();
  
  sendDate() {
    this.dateSender.emit(this.outputDate);
  }
}

