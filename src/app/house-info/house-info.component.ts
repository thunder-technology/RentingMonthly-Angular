import { Component, OnInit } from '@angular/core';
import {HouseInfoService} from './house-info.service';
import {HouseInfo, Houses} from '../models/house';
import {MatDialog} from '@angular/material';
import {HouseExtraInfoDialogComponent} from './house-extra-info-dialog/house-extra-info-dialog.component';
import {ConfirmDialogComponent} from '../landlord-table/landlord-table.component';
import {Router} from '@angular/router';
import {log} from 'util';
import {LandlordInfo} from '../models/user';
import {factchecktools_v1alpha1} from 'googleapis';

@Component({
  selector: 'app-house-info',
  templateUrl: './house-info.component.html',
  styleUrls: ['./house-info.component.scss']
})
export class HouseInfoComponent implements OnInit {
  private headers: string[];
  private houses: Houses[];

  constructor(private service: HouseInfoService,
              private dialog: MatDialog,
              private router: Router) {
    this.headers = ['address', 'city', 'province', 'House Type', 'Intersection', 'postCode', 'totalRooms', 'description'];
  }

  ngOnInit() {
    this.service.getHouseInfo()
        .subscribe(data => {
          this.houses = <Houses[]>data._embedded.houses;
        });
  }

  goToUploadPage() {
    this.router.navigate(['house-recording', {update: false}]);
  }

  goToUpdatePage() {
    this.router.navigate(['house-recording', {update: true}]);
  }

  onClickDialog(id: number) {
    this.dialog.open(HouseExtraInfoDialogComponent, {
      disableClose: true,
      hasBackdrop: true,
      width: '50em',
      minWidth: '50em',
      data: id
    })
  }

  onDeleteDialog(id: number) {
    this.dialog.open(ConfirmDialogComponent, {
      disableClose: true,
      hasBackdrop: true,
      width: '50em',
      minWidth: '50em',
      data: id
    })
  }
}
