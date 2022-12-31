import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesPlusTextComponent } from './images-plus-text.component';

describe('ImagesPlusTextComponent', () => {
  let component: ImagesPlusTextComponent;
  let fixture: ComponentFixture<ImagesPlusTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesPlusTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesPlusTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
