import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapaEjecutarComponent } from './etapa-ejecutar.component';

describe('EtapaEjecutarComponent', () => {
  let component: EtapaEjecutarComponent;
  let fixture: ComponentFixture<EtapaEjecutarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtapaEjecutarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtapaEjecutarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
