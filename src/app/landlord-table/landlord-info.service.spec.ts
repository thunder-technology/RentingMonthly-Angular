import { TestBed } from '@angular/core/testing';

import { LandlordInfoService } from './landlord-info.service';

describe('LandlordInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LandlordInfoService = TestBed.get(LandlordInfoService);
    expect(service).toBeTruthy();
  });
});
