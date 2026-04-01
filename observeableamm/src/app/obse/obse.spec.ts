import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obse } from './obse';

describe('Obse', () => {
  let component: Obse;
  let fixture: ComponentFixture<Obse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Obse],
    }).compileComponents();

    fixture = TestBed.createComponent(Obse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
