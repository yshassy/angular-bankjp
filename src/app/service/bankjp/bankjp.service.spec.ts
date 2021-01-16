import { TestBed } from '@angular/core/testing';

import { BankjpService } from './bankjp.service';

describe('BankjpService', () => {
  let service: BankjpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankjpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
