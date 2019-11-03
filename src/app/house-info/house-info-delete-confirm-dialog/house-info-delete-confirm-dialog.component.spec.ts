import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseInfoDeleteConfirmDialogComponent } from './house-info-delete-confirm-dialog.component';

describe('HouseInfoDeleteConfirmDialogComponent', () => {
  let component: HouseInfoDeleteConfirmDialogComponent;
  let fixture: ComponentFixture<HouseInfoDeleteConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseInfoDeleteConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseInfoDeleteConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
