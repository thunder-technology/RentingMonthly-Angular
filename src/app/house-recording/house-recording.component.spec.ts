import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseRecordingComponent } from './house-recording.component';

describe('HouseRecordingComponent', () => {
  let component: HouseRecordingComponent;
  let fixture: ComponentFixture<HouseRecordingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseRecordingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseRecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
