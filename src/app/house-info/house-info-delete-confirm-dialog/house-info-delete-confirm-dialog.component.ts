import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {LandlordInfoService} from '../../landlord-table/landlord-info.service';
import {DialogOverviewExampleDialogComponent} from '../../landlord-table/landlord-table.component';
import {HouseInfoService} from '../house-info.service';

@Component({
  selector: 'app-house-info-delete-confirm-dialog',
  templateUrl: './house-info-delete-confirm-dialog.component.html',
  styleUrls: ['./house-info-delete-confirm-dialog.component.scss']
})
export class HouseInfoDeleteConfirmDialogComponent {

  id: number;

  constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
      private service: HouseInfoService,
      @Inject(MAT_DIALOG_DATA) id: number
  ) {
    this.id = id;
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onDelete(): void {
    this.service.deleteHouseInfoByHouseId(this.id).subscribe(data => console.log(data));
  }
}
