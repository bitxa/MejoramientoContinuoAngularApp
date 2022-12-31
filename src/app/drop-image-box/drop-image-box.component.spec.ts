import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropImageBoxComponent } from './drop-image-box.component';

describe('DropImageBoxComponent', () => {
  let component: DropImageBoxComponent;
  let fixture: ComponentFixture<DropImageBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropImageBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropImageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
