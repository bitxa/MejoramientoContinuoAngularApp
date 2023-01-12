import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapaVerificarComponent } from './etapa-verificar.component';

describe('EtapaVerificarComponent', () => {
  let component: EtapaVerificarComponent;
  let fixture: ComponentFixture<EtapaVerificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtapaVerificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtapaVerificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
