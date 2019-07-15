import { TestBed } from '@angular/core/testing';

import { HouseProfileService } from './house-profile.service';

describe('HouseProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HouseProfileService = TestBed.get(HouseProfileService);
    expect(service).toBeTruthy();
  });
});
