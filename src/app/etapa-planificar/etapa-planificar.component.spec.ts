import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapaPlanificarComponent } from './etapa-planificar.component';

describe('EtapaPlanificarComponent', () => {
  let component: EtapaPlanificarComponent;
  let fixture: ComponentFixture<EtapaPlanificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtapaPlanificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtapaPlanificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
