import { Component, OnInit } from '@angular/core';
import {HouseInfoService} from './house-info.service';
import {Houses} from '../models/house';
import {MatDialog} from '@angular/material';
import {HouseExtraInfoDialogComponent} from './house-extra-info-dialog/house-extra-info-dialog.component';
import {ConfirmDialogComponent} from '../landlord-table/landlord-table.component';
import {Router} from '@angular/router';

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

  }

  onClickDialog() {
    this.dialog.open(HouseExtraInfoDialogComponent, {
      disableClose: true,
      hasBackdrop: true,
      width: '50em',
      minWidth: '50em',
      data: this.houses
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
