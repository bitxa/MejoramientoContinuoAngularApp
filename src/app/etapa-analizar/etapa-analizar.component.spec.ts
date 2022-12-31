import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapaAnalizarComponent } from './etapa-analizar.component';

describe('EtapaAnalizarComponent', () => {
  let component: EtapaAnalizarComponent;
  let fixture: ComponentFixture<EtapaAnalizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtapaAnalizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtapaAnalizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
