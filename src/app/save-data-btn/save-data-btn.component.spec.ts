import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDataBtnComponent } from './save-data-btn.component';

describe('SaveDataBtnComponent', () => {
  let component: SaveDataBtnComponent;
  let fixture: ComponentFixture<SaveDataBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveDataBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveDataBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
