import { TestBed } from '@angular/core/testing';

import { AddToKart } from './add-to-kart';

describe('AddToKart', () => {
  let service: AddToKart;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddToKart);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
