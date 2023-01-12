import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-drop-image-box',
  templateUrl: './drop-image-box.component.html',
  styleUrls: ['./drop-image-box.component.css']
})

export class DropImageBoxComponent {

  files: File[] = [];
  @Output() filesSender = new EventEmitter<any[]>();

  onSelect(event: any) {
    this.files.push(...event.addedFiles);
    this.sendFiles();
  }

  onRemove(event: any) {
    this.files = this.files.filter(file => file !== event)
  }

  sendFiles(){
    this.filesSender.emit(this.files);
  }
}
    