import {Component, Inject, Injectable, OnChanges, OnInit, ɵChangeDetectorStatus} from '@angular/core';
import {LandlordInfoService} from './landlord-info.service';
import {LandlordInfo, ResidentInfo} from '../models/user';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Constants} from '../models/house';
import {merge, validateAllFormFields} from '../common/util';
import {Route, Router} from '@angular/router';
import {timeout} from 'rxjs/operators';
import {language_v1} from 'googleapis';


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
    landlordInfo: LandlordInfo[];
    residentInfo: ResidentInfo[];

    constructor(
        private service: LandlordInfoService,
        private dialog: MatDialog,
        private route: Router,
    ) {
       this.headers = Constants.headers;
    }

    ngOnInit(): void {
        this.service.getLandlordInfo()
            .subscribe(ldata => {
                this.landlordInfo = <LandlordInfo[]>ldata._embedded.landlordInfoes;
                console.log(this.landlordInfo);
            });
    }

    onClickDialog(): void {
        this.dialog.open(DialogComponent, {
            width: '50%',
            data: LandlordInfo
        }).afterClosed().subscribe(() => this.route.navigate(['landlord-table']));
    }

    onUpdateDialog(userId: number): void {
        this.service.getLandlordInfoById(userId).subscribe(
            data => {
                this.dialog.open(DialogComponent, {
                    width: '50%',
                    data: data
                }).afterClosed().subscribe(() => this.route.navigate(['landlord-table']));
            }
        );
    }

    onClickDeleteDialog(userId: number) {
        this.dialog.open(ConfirmDialogComponent, {
            width: '50%',
            data: userId
        }).afterClosed().subscribe(() => this.route.navigate(['landlord-table']));
    }
}

@Component({
    selector: 'app-landlord-table-dialog',
    templateUrl: 'landlord-table-dialog.component.html',
})
export class DialogComponent implements OnInit {
    form: FormGroup;
    data: LandlordInfo;
    hasId: boolean;

    constructor(
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<DialogComponent>,
        private service: LandlordInfoService,
        @Inject(MAT_DIALOG_DATA) data: LandlordInfo
        ) {
        this.data = data;
        this.hasId = this.data.userId !== undefined;
    }

    ngOnInit(): void {
        console.log('data in the Dialog');
        console.log(this.data);
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
            this.service.postLandlordInfo(this.form.value).subscribe(data => console.log(data));
        } else {
            validateAllFormFields(this.form);
        }
    }

    onUpdate(): void {
        console.log('data when merged');
        const merged = merge(this.form.value, this.data) as LandlordInfo;
        console.log(merged);
        if (this.form.valid) {
            this.service.putLandlordInfoById(merged).subscribe(data => console.log('updated', data));
        } else {
            validateAllFormFields(this.form);
        }
    }
}

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: 'confirm-dialog.component.html',
})
export class ConfirmDialogComponent {
    id: number;

    constructor(
        public dialogRef: MatDialogRef<DialogComponent>,
        private service: LandlordInfoService,
        @Inject(MAT_DIALOG_DATA) id: number
    ) {
        this.id = id;
    }

    onClose(): void {
        this.dialogRef.close();
    }

    onDelete(): void {
        this.service.deleteLandlordById(this.id).subscribe(
            data => console.log('deleted data:' + data));
    }
}

