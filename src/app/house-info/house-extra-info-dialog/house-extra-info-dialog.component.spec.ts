import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseExtraInfoDialogComponent } from './house-extra-info-dialog.component';

describe('HouseExtraInfoDialogComponent', () => {
  let component: HouseExtraInfoDialogComponent;
  let fixture: ComponentFixture<HouseExtraInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseExtraInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseExtraInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
