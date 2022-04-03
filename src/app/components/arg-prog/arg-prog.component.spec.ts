import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgProgComponent } from './arg-prog.component';

describe('ArgProgComponent', () => {
  let component: ArgProgComponent;
  let fixture: ComponentFixture<ArgProgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgProgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArgProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
