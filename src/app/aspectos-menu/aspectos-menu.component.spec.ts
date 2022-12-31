import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectosMenuComponent } from './aspectos-menu.component';

describe('AspectosMenuComponent', () => {
  let component: AspectosMenuComponent;
  let fixture: ComponentFixture<AspectosMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AspectosMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AspectosMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
