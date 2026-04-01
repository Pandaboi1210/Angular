import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Checking } from './checking';

describe('Checking', () => {
  let component: Checking;
  let fixture: ComponentFixture<Checking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Checking],
    }).compileComponents();

    fixture = TestBed.createComponent(Checking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
