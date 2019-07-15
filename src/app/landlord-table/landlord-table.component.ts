import {Component, Inject, Injectable, OnChanges, OnInit} from '@angular/core';
import {LandlordInfoService} from './landlord-info.service';
import {UserInfo} from '../models/user';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {formatNumber} from '@angular/common';


@Component({
    selector: 'app-landlord-table',
    templateUrl: './landlord-table.component.html',
    styleUrls: ['./landlord-table.component.scss']
})

@Injectable({
    providedIn: 'root'
})
export class LandlordTableComponent implements OnInit {
    headers: string[];
    userInfo: UserInfo[];

    constructor(
        private service: LandlordInfoService,
        private dialog: MatDialog,
    ) {
        this.headers = ['User Id', 'Full Name', 'User Name', 'Email', 'Contact Number'];
    }

    private openDialog(): void {
        this.dialog.open(DialogOverviewExampleDialogComponent, {
            disableClose: true,
            hasBackdrop: true,
            width: '30em',
            minWidth: '30em',
            data: UserInfo
        });
    }

    private updateDialog(userinfo: UserInfo): void {
        this.dialog.open(DialogOverviewExampleDialogComponent, {
            disableClose: true,
            hasBackdrop: true,
            width: '30em',
            minWidth: '30em',
            data: userinfo,
        });
    }

    private deleteInfo(id: number): void {
        this.dialog.open(ConfirmDialogComponent, {
            disableClose: true,
            hasBackdrop: true,
            width: '30em',
            minWidth: '30em',
            data: id
        });
    }

    ngOnInit(): void {
        this.service.getInfo()
            .subscribe(data => this.userInfo = data._embedded.userInfoes);
    }
}

@Component({
    selector: 'app-landlord-table-dialog',
    templateUrl: 'landlord-table-dialog.component.html',
})
export class DialogOverviewExampleDialogComponent implements OnInit {
    form: FormGroup;
    data: UserInfo;
    hasId = false;

    constructor(
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
        private service: LandlordInfoService,
        @Inject(MAT_DIALOG_DATA) data: UserInfo
        ) {
        this.data = data;
        this.hasId = this.data.userId !== undefined;
    }


    ngOnInit(): void {
        this.form = this.fb.group({
            fullName: ['', Validators.required],
            userName: ['', Validators.required],
            email: ['', Validators.required],
            contactNumber: ['', Validators.required]
        })
    }

    onClose(): void {
        this.dialogRef.close();
    }

    onCreate(): void {
        this.service.postUserInfo(this.form.value).subscribe(data => {
            console.log('post: \n' + data);
        })
    }

    onUpdate(): void {
        const constData = <UserInfo>this.form.value;
        constData.userId = this.data.userId;
        this.service.updateUserInfo(constData).subscribe(data => {
            alert('update ' + data);
        })
    }
}

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: 'confirm-dialog.component.html',
})
export class ConfirmDialogComponent {

    id: number;

    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
        private service: LandlordInfoService,
        @Inject(MAT_DIALOG_DATA) id: number
    ) {
        this.id = id;
    }

    onClose(): void {
        this.dialogRef.close();
    }

    onDelete(): void {
        this.service.deleteUserInfoById(this.id).subscribe(data => {

        });
    }
}
