import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp11 } from './comp11';

describe('Comp11', () => {
  let component: Comp11;
  let fixture: ComponentFixture<Comp11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comp11],
    }).compileComponents();

    fixture = TestBed.createComponent(Comp11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
