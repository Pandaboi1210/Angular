import { TestBed } from '@angular/core/testing';

import { ItemsInKart } from './items-in-kart';

describe('ItemsInKart', () => {
  let service: ItemsInKart;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsInKart);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
