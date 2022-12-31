import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-aspectos-menu',
  templateUrl: './aspectos-menu.component.html',
  styleUrls: ['./aspectos-menu.component.css']
})
export class AspectosMenuComponent {
  constructor(public fb: FormBuilder) { }

  aspectosForm = this.fb.group({
    op: ['']
  })

  get inputTypeOp() {
    return this.aspectosForm.get('op');
  }


  onChange() {

  }
}
