import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MejoramientoContinuoMenuComponent } from './mejoramiento-continuo-menu.component';

describe('MejoramientoContinuoMenuComponent', () => {
  let component: MejoramientoContinuoMenuComponent;
  let fixture: ComponentFixture<MejoramientoContinuoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MejoramientoContinuoMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MejoramientoContinuoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
