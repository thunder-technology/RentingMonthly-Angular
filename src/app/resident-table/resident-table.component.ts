import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {LandlordInfo, ResidentInfo} from '../models/user';
import {DialogComponent} from '../landlord-table/landlord-table.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Constants} from '../models/house';
import {ResidentInfoService} from './resident-info.service';
import {Router} from '@angular/router';
import {ResidentDialogComponent} from './resident-dialog/resident-dialog.component';
import {delay} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-resident-table',
  templateUrl: './resident-table.component.html',
  styleUrls: ['./resident-table.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class ResidentTableComponent implements OnInit {
  private headers: string[];
  private residentInfo: ResidentInfo[];

  constructor(private dialog: MatDialog,
              private service: ResidentInfoService,
              private router: Router) {
    this.headers = Constants.r_headers;
  }

  ngOnInit() {
    this.service.getInfo().subscribe(data => {
      this.residentInfo = data._embedded.residentInfoes;
    })
  }

  private openDialog(): void {
    const openObservable = this.dialog.open(ResidentDialogComponent, {
      disableClose: true,
      hasBackdrop: true,
      width: '50em',
      minWidth: '50em'
    }).afterClosed()
        .subscribe(() => this.router.navigate(['resident-info']));
  }

  private updateDialog(data: ResidentInfo): void {
    this.dialog.open(ResidentDialogComponent, {
      disableClose: true,
      hasBackdrop: true,
      width: '50em',
      minWidth: '50em',
      data: data,
    }).afterClosed()
        .subscribe(() => this.router.navigate(['resident-info']));
  }

  private deleteInfo(data: ResidentInfo): void {
    this.dialog.open(ResidentConfirmDialogComponent, {
      disableClose: true,
      hasBackdrop: true,
      width: '20em',
      minWidth: '20em',
      data: data
    }).afterClosed()
        .subscribe(() => this.router.navigate(['resident-info'])); ;
  }
}

@Component({
  selector: 'app-resident-confirm-dialog',
  templateUrl: './resident-confirm-dialog.component.html',
  styleUrls: ['./resident-confirm-dialog.component.scss']
})
export class ResidentConfirmDialogComponent {
  data: ResidentInfo;

  constructor(
      public dialogRef: MatDialogRef<DialogComponent>,
      private service: ResidentInfoService,
      @Inject(MAT_DIALOG_DATA) data: ResidentInfo
  ) {
    this.data = data;
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onDelete(): void {
    this.service.deleteResidentById(this.data).subscribe(
        data => console.log('deleted data:' + data));
  }
}

