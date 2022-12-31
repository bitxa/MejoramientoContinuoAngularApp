import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapaDesarrollarComponent } from './etapa-desarrollar.component';

describe('EtapaDesarrollarComponent', () => {
  let component: EtapaDesarrollarComponent;
  let fixture: ComponentFixture<EtapaDesarrollarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtapaDesarrollarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtapaDesarrollarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
