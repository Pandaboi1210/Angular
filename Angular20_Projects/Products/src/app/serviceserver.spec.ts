import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Serviceserver } from './serviceserver';

describe('Serviceserver', () => {
  let service: Serviceserver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(Serviceserver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});