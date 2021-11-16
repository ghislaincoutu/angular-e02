import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T03Component } from './t03.component';

describe('T03Component', () => {
  let component: T03Component;
  let fixture: ComponentFixture<T03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
