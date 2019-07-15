import { TestBed } from '@angular/core/testing';

import { HouseRecordingService } from './house-recording.service';

describe('HouseRecordingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HouseRecordingService = TestBed.get(HouseRecordingService);
    expect(service).toBeTruthy();
  });
});
