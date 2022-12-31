import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcFormComponent } from './imc-form.component';

describe('ImcFormComponent', () => {
  let component: ImcFormComponent;
  let fixture: ComponentFixture<ImcFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImcFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
