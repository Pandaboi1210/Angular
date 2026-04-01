import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prehome } from './prehome';

describe('Prehome', () => {
  let component: Prehome;
  let fixture: ComponentFixture<Prehome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prehome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prehome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
