import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapaActuarComponent } from './etapa-actuar.component';

describe('EtapaActuarComponent', () => {
  let component: EtapaActuarComponent;
  let fixture: ComponentFixture<EtapaActuarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtapaActuarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtapaActuarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
