import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-images-plus-text',
  templateUrl: './images-plus-text.component.html',
  styleUrls: ['./images-plus-text.component.css']
})
export class ImagesPlusTextComponent {
  causasTextVisible: Boolean = false;
  imageBoxVisible: Boolean = false;
  files: File[] = [];
  
  @Output() filesSender = new EventEmitter<any[]>();
  

  constructor(public fb: FormBuilder) { }

  inputTypeOpForm = this.fb.group({
    op: ['']
  })

  get inputTypeOp() {
    return this.inputTypeOpForm.get('op');
  }


  onChange() {
    //alert(JSON.stringify(this.inputTypeOpForm.value));
    switch (this.inputTypeOpForm.value.op) {
      case 'oi':
        this.causasTextVisible = false;
        this.imageBoxVisible = true;
        break;
      case 'ot':
        this.causasTextVisible = true;
        this.imageBoxVisible = false;
        break;
      case 'it':
        this.causasTextVisible = true;
        this.imageBoxVisible = true;
        break;
    }
  }

  receiveFiles($event: any[]) {
    this.files = $event;
    this.sendFiles();
  }

  sendFiles(){
    this.filesSender.emit(this.files);
  }


}
