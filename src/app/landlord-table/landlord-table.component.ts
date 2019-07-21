import {Component, Inject, Injectable, OnChanges, OnInit, ɵChangeDetectorStatus} from '@angular/core';
import {LandlordInfoService} from './landlord-info.service';
import {LandlordInfo, LandLordInfoPost, UserInfo} from '../models/user';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {AbstractControl, Form, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {unwatchFile} from 'fs';
import {Equal} from 'tslint/lib/utils';


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
    landlordInfo: LandlordInfo[];
    landlordInfoPost: LandLordInfoPost[];

    constructor(
        private service: LandlordInfoService,
        private dialog: MatDialog,
    ) {
        this.headers = ['User Id', 'User Name', 'Full Name', 'Email', 'Contact Number', 'Residential Info', 'SIN'];
    }

    private openDialog(): void {
        this.dialog.open(DialogOverviewExampleDialogComponent, {
            disableClose: true,
            hasBackdrop: true,
            width: '50em',
            minWidth: '50em'
        });
    }

    private updateDialog(data: LandLordInfoPost): void {
        this.dialog.open(DialogOverviewExampleDialogComponent, {
            disableClose: true,
            hasBackdrop: true,
            width: '50em',
            minWidth: '50em',
            data: data,
        });
    }

    private deleteInfo(id: number): void {
        this.dialog.open(ConfirmDialogComponent, {
            disableClose: true,
            hasBackdrop: true,
            width: '20em',
            minWidth: '20em',
            data: id
        });
    }

    ngOnInit(): void {
        this.service.getInfo()
            .subscribe(udata => {
                this.userInfo = <UserInfo[]>udata._embedded.userInfoes;
                this.service.getLandlordInfo()
                    .subscribe(
                        uinfo => {
                            this.landlordInfo = <LandlordInfo[]>uinfo._embedded.landlordInfoes;
                            const buffer = <LandLordInfoPost[]>[];
                            for (let i = 0; i < this.userInfo.length; i++) {
                                for (let j = 0; j < this.landlordInfo.length; j++) {
                                    if (this.userInfo[i].userId === this.landlordInfo[j].landlordId) {
                                        const object = new LandLordInfoPost(this.userInfo[i], this.landlordInfo[j]);
                                        buffer.push(object);
                                    }
                                }
                            }
                            this.landlordInfoPost = buffer;
                        });
            });

    }
}

@Component({
    selector: 'app-landlord-table-dialog',
    templateUrl: 'landlord-table-dialog.component.html',
})
export class DialogOverviewExampleDialogComponent implements OnInit {
    form: FormGroup;
    data: LandLordInfoPost;
    hasId: boolean;

    constructor(
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
        private service: LandlordInfoService,
        @Inject(MAT_DIALOG_DATA) data: LandLordInfoPost
        ) {
        this.data = data;
        this.hasId = this.data !== null;
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            fullName: ['', Validators.required],
            userName: ['', Validators.required],
            email: ['', Validators.required],
            contactNumber: ['', Validators.required],
            residentalAddress: ['', Validators.required],
            sin: ['', Validators.required]
        });
    }

    get fullName() {return this.form.get('fullName'); }
    get userName() {return this.form.get('userName'); }
    get email() {return this.form.get('email'); }
    get contactNumber() {return this.form.get('contactNumber'); }
    get residentalAddress() {return this.form.get('residentalAddress'); }
    get sin() {return this.form.get('sin'); }

    onClose(): void {
        this.dialogRef.close();
    }

    onCreate(): void {
        if (this.form.valid) {
            this.service.postLandlordInfo(this.parsedInfo()).subscribe(data => console.log(data));
        } else {
            this.validateAllFormFields(this.form);
        }
    }

    onUpdate(): void {
        this.service.updateUserInfo(this.parseUserForPut()).subscribe(data => console.log(data));
        this.service.updateLandLordInfo(this.parsedLandlordForPut()).subscribe(data => console.log(data));
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


    private parseUserForPut(): UserInfo {
        const data = this.form.getRawValue();
        console.log(data);
        const uInfo: UserInfo = new UserInfo(
            data.fullName === '' ? this.data.user.fullName : data.fullName,
            data.userName === '' ? this.data.user.userName : data.userName,
            data.email === '' ? this.data.user.email : data.email,
            data.contactNumber === '' ? this.data.user.contactNumber : data.contactNumber,
            this.data.user.userId
        );
        return uInfo;
    }

    private parsedLandlordForPut(): LandlordInfo {
        const data = this.form.getRawValue();
        console.log(data);
        // uInfo.userId === lInfo.landlordId
        const lInfo: LandlordInfo = new LandlordInfo(
            data.residentalAddress === '' ? this.data.landlord.residentalAddress : data.residentalAddress,
            data.sin === '' ? this.data.landlord.sin : data.sin,
            this.data.user.userId,
        );
        return lInfo;
    }

    private parsedInfo(): LandLordInfoPost {
        const data = this.form.getRawValue();

        const uInfo: UserInfo = new UserInfo(
            data.fullName,
            data.userName,
            data.email ,
            data.contactNumber
        );

        if (this.hasId) {
            uInfo.userId = this.data.user.userId;
        }

        // uInfo.userId === lInfo.landlordId
        const lInfo: LandlordInfo = new LandlordInfo(
            data.residentalAddress,
            data.sin,
            uInfo.userId,
        );
        return new LandLordInfoPost(uInfo, lInfo);
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
        this.service.deleteUserInfoById(this.id).subscribe(data => console.log(data));
    }
}

