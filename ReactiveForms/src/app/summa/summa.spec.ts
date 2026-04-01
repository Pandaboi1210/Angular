import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Summa } from './summa';

describe('Summa', () => {
  let component: Summa;
  let fixture: ComponentFixture<Summa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Summa],
    }).compileComponents();

    fixture = TestBed.createComponent(Summa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
