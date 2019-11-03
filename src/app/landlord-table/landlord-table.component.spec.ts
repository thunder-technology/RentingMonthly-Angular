import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordTableComponent } from './landlord-table.component';

describe('LandlordTableComponent', () => {
  let component: LandlordTableComponent;
  let fixture: ComponentFixture<LandlordTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandlordTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
