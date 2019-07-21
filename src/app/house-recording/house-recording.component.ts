import {Component, Directive, OnInit} from '@angular/core';
import {HouseExtraInfo, Houses} from '../models/house';
import {HouseRecordingService} from './house-recording.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatListOption, MatSelectionList} from '@angular/material';

@Component({
  selector: 'app-house-recording',
  templateUrl: './house-recording.component.html',
  styleUrls: ['./house-recording.component.scss']
})
export class HouseRecordingComponent implements OnInit {
  private houseInfo: Houses[];
  private houseHeader: Houses;
  private extraInfoHeader: string[];
  private form: FormGroup;
  private houseTypeSelection: string[];

  private isLandlordIdValid: boolean;

  constructor(private service: HouseRecordingService,
              private fb: FormBuilder) {
    this.houseInfo = [];
    this.extraInfoHeader = [
        'hasAirCondition',
        'hasGym',
        'hasKitchen',
        'hasLaundry',
        'hasSwimmingpool',
        'hasTv',
        'hasWifi',
        'isNearSubway',
        'parkingNum'
    ];
    this.houseHeader = new Houses(
        'Address',
        'City',
        'Description',
        'Type of House',
        'Intersection',
        'Post Code',
        'Province',
        'Rooms'
    );
    this.houseTypeSelection = ['Town House', 'House', 'Condo', 'Apartment'];
  }

  get landlordId() {return this.form.get('landlordId')}
  get address() {return this.form.get('address')};
  get city() {return this.form.get('city')};
  get desc() {return this.form.get('desc')};
  get houseType() {return this.form.get('houseType')};
  get intersection() {return this.form.get('intersection')};
  get postCode() {return this.form.get('postCode')};
  get province() {return this.form.get('province')};
  get totalRooms() {return this.form.get('totalRooms')};
  get hasAirCondition() {return this.form.get('houseExtraInfo').get('hasAirCondition')};
  get hasGym() {return this.form.get('houseExtraInfo').get('hasGym')};
  get hasKitchen() {return this.form.get('houseExtraInfo').get('hasKitchen')};
  get hasLaundry() {return this.form.get('houseExtraInfo').get('hasLaundry')};
  get hasSwimmingpool() {return this.form.get('houseExtraInfo').get('hasSwimmingpool')};
  get hasTv() {return this.form.get('houseExtraInfo').get('hasTv')};
  get hasWifi() {return this.form.get('houseExtraInfo').get('hasWifi')};
  get isNearSubway() {return this.form.get('houseExtraInfo').get('isNearSubway')};
  get parkingNum() {return this.form.get('houseExtraInfo').get('parkingNum')};

  ngOnInit(): void {
    this.form = this.fb.group({
      landlordId: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      desc: ['', Validators.required],
      houseType: ['', Validators.required],
      intersection: ['', Validators.required],
      postCode: ['', Validators.required],
      province: ['', Validators.required],
      totalRooms: ['', Validators.required],
      houseExtraInfo: this.fb.group({
        hasAirCondition: ['0', Validators.required],
        hasGym: ['0', Validators.required],
        hasKitchen: ['0', Validators.required],
        hasLaundry: ['0', Validators.required],
        hasSwimmingpool: ['0', Validators.required],
        hasTv: ['0', Validators.required],
        hasWifi: ['0', Validators.required],
        isNearSubway: ['0', Validators.required],
        parkingNum: ['0', Validators.required],
      })
    });
  }

  private validateAllFormFields(fb: FormGroup) {
    Object.keys(fb.controls).forEach(field => {
      const ctrl = fb.get(field);
      if (ctrl instanceof FormControl) {
        ctrl.markAsTouched({ onlySelf: true});
      } else if ( ctrl instanceof FormGroup) {
        this.validateAllFormFields(ctrl);
      }
    });
  }

  onGroupsChange(options: MatListOption[]) {
    // map these MatListOptions to their values
    const fg = <FormGroup>this.form.get('houseExtraInfo');
    const arr = options.map(o => o.value);

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < this.extraInfoHeader.length; j++) {
        const buf = <string>this.extraInfoHeader[j];
        if (buf === arr[i]) {
          fg.patchValue({[buf]: '1'});
        }
      }
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      alert('Success!');
    } else {
      this.validateAllFormFields(this.form);
    }
  }
}
