import { TestBed } from '@angular/core/testing';

import { LandlordInfoService } from './landlord-info.service';

describe('LandlordInfoService', () => {
  let service: LandlordInfoService;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeAll(() => {
    service = TestBed.get(LandlordInfoService);
  });

});
