import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kart } from './kart';

describe('Kart', () => {
  let component: Kart;
  let fixture: ComponentFixture<Kart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
