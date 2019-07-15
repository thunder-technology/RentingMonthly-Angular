import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerRecordingComponent } from './owner-recording.component';

describe('OwnerRecordingComponent', () => {
  let component: OwnerRecordingComponent;
  let fixture: ComponentFixture<OwnerRecordingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerRecordingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerRecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
