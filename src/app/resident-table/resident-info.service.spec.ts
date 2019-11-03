import { TestBed } from '@angular/core/testing';

import { ResidentInfoService } from './resident-info.service';

describe('ResidentInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResidentInfoService = TestBed.get(ResidentInfoService);
    expect(service).toBeTruthy();
  });
});
