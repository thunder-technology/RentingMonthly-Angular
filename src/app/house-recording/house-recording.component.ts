import {Component, OnInit} from '@angular/core';
import {Houses} from '../models/house';
import {HouseRecordingService} from './house-recording.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatListOption} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-house-recording',
  templateUrl: './house-recording.component.html',
  styleUrls: ['./house-recording.component.scss']
})
export class HouseRecordingComponent implements OnInit {
  private houseInfo: Houses[];
  private extraInfoHeader: string[];
  private extraInfo: string[];
  private form: FormGroup;
  private houseTypeSelection: string[];
  private update: boolean;

  constructor(private service: HouseRecordingService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
    this.houseInfo = [];
    this.extraInfoHeader = [
        'Does it have Air Conditioner ?',
        'Does it have Gym ?',
        'Does it have Kitchen ?',
        'Does it have Laundry Room ?',
        'Does it have Swimming Pool ?',
        'Does it have Television ?',
        'Does it have Wifi ?',
        'Is it near the subway station ?',
        'Is parking available ?'
    ];
    this.extraInfo = [
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
    this.houseTypeSelection = ['Town House', 'House', 'Condo', 'Apartment'];
  }

  get houseHeader() {return {
    city: 'City',
    province: 'Province',
    address: 'Address',
    totalRooms: 'Total Rooms',
    houseType: 'House Type',
    postCode: 'Postal Code',
    intersection: 'Intersection',
    desc: 'Description'
  }}
  get houseId() {return this.form.get('houseId')};
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
    this.route.queryParams.subscribe(data => this.update = data['update']);
    this.form = this.fb.group({
      houseId: [''],
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

  // Depth First Search to validate all form fields.
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
      for (let j = 0; j < this.extraInfo.length; j++) {
        const buf = <string>this.extraInfo[j];
        if (buf === arr[i]) {
          fg.patchValue({[buf]: '1'});
        }
      }
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
        const house = <Houses>this.form.value;
        console.log(this.form.value);
        this.service.postHouseInfo(house).subscribe(data => console.log(data));
    } else {
      this.validateAllFormFields(this.form);
    }
    this.router.navigate(['house-info']);
  }
}
