import {Component, Directive, OnInit} from '@angular/core';
import {HouseInfo, Houses} from '../models/house';
import {HouseType} from '../models/houseType';
import {HouseRecordingService} from './house-recording.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-house-recording',
  templateUrl: './house-recording.component.html',
  styleUrls: ['./house-recording.component.scss']
})
export class HouseRecordingComponent implements OnInit{
  private houseInfo: Houses[];
  private houseHeader: Houses;
  private form: FormGroup;

  constructor(private service: HouseRecordingService,
              private fb: FormBuilder) {
    this.houseInfo = [];
    this.houseHeader = new Houses(
        'Address',
        'City',
        'Description',
        'Type of House',
        'Intersection',
        'Post Code',
        'Province',
        'Rooms');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      desc: ['', Validators.required],
      houseType: ['', Validators.required],
      intersection: ['', Validators.required],
      postCode: ['', Validators.required],
      province: ['', Validators.required],
      totalRooms: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.service.postHouseInfoRes(this.form.value).subscribe(data => {
      console.log('success: ' + data);
    });
  }
}
