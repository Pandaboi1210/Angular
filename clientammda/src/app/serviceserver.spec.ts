import { TestBed } from '@angular/core/testing';

import { Serviceserver } from './serviceserver';

describe('Serviceserver', () => {
  let service: Serviceserver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Serviceserver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
