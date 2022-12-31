import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drop-image-box',
  templateUrl: './drop-image-box.component.html',
  styleUrls: ['./drop-image-box.component.css']
})

export class DropImageBoxComponent {
  files: File[] = [];

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files = this.files.filter(file => file !== event)
  }
}
