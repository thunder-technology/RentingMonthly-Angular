import { TestBed } from '@angular/core/testing';

import { HouseInfoService } from './house-info.service';

describe('HouseInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HouseInfoService = TestBed.get(HouseInfoService);
    expect(service).toBeTruthy();
  });
});
