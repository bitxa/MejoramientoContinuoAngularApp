import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionesMenuComponent } from './dimensiones-menu.component';

describe('DimensionesMenuComponent', () => {
  let component: DimensionesMenuComponent;
  let fixture: ComponentFixture<DimensionesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DimensionesMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DimensionesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
