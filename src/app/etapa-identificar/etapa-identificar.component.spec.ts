import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapaIdentificarComponent } from './etapa-identificar.component';

describe('EtapaIdentificarComponent', () => {
  let component: EtapaIdentificarComponent;
  let fixture: ComponentFixture<EtapaIdentificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtapaIdentificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtapaIdentificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
