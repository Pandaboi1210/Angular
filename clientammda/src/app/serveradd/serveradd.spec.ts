import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Serveradd } from './serveradd';

describe('Serveradd', () => {
  let component: Serveradd;
  let fixture: ComponentFixture<Serveradd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Serveradd],
    }).compileComponents();

    fixture = TestBed.createComponent(Serveradd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
