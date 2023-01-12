import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-aspectos-menu',
  templateUrl: './aspectos-menu.component.html',
  styleUrls: ['./aspectos-menu.component.css']
})
export class AspectosMenuComponent {

  form : FormGroup;
  @Output() sender = new EventEmitter<string>();
  
  
  selectedOp : string;

  
  constructor(public fb: FormBuilder) { 
    this.form = this.fb.group({
      op: [''],
      other_op_input : new FormControl('')
    })

    this.selectedOp = "";
  }

  get inputTypeOp() {
    return this.form.get('op');
  }

  get otherInputType() {
    return this.form.get('other_op_input');
  }

  onChange() {
    this.selectedOp = this.inputTypeOp?.value;
    this.sendOp();
  }

  checkOtherOp(){
    this.onChange();

    if(this.selectedOp === 'ot'){
      this.selectedOp = this.otherInputType?.value;
    }

    this.sendOp();
  }

  sendOp(){
    this.sender.emit(this.selectedOp);
    
  }
}
