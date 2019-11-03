import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {HouseInfoService} from '../house-info.service';
import {HouseExtraInfo} from '../../models/house';

// @ts-ignore
@Component({
  selector: 'app-house-extra-info-dialog',
  templateUrl: './house-extra-info-dialog.component.html',
  styleUrls: ['./house-extra-info-dialog.component.scss']
})
export class HouseExtraInfoDialogComponent implements OnInit {
  private id: number;
  private houseExtraInfo: HouseExtraInfo;

  constructor( public dialogRef: MatDialogRef<HouseExtraInfoDialogComponent>,
               private service: HouseInfoService,
               @Inject(MAT_DIALOG_DATA) id: number) {
    this.id = id;
  }

  ngOnInit() {
    this.service.getHouseInfoByHouseId(this.id).subscribe(data => {
      this.houseExtraInfo = data.houseExtraInfo;
    });
  }


  onClose(): void {
    this.dialogRef.close();
  }

}
