import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T04Component } from './t04.component';

describe('T04Component', () => {
  let component: T04Component;
  let fixture: ComponentFixture<T04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
