import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ResidentInfo} from '../../models/user';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {merge, validateAllFormFields} from '../../common/util';
import {ResidentInfoService} from '../resident-info.service';

@Component({
  selector: 'app-resident-dialog',
  templateUrl: './resident-dialog.component.html',
  styleUrls: ['./resident-dialog.component.scss']
})
export class ResidentDialogComponent implements OnInit {
  form: FormGroup;
  data: ResidentInfo;
  hasId: boolean;

  constructor(
      private fb: FormBuilder,
      public dialogRef: MatDialogRef<ResidentDialogComponent>,
      private service: ResidentInfoService,
      @Inject(MAT_DIALOG_DATA) data: ResidentInfo
  ) {
    this.data = data;
    this.hasId = false;
  }

  ngOnInit(): void {
    console.log('data in the Dialog');
    console.log(this.data);
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.required],
      contactNumber: ['', Validators.required],
      avatarUri: ['', Validators.required],
      bankingRunoverUri: ['', Validators.required],
      creditCardNo: ['', Validators.required],
      creditCardType: ['', Validators.required]
    });
  }

  get fullName() {return this.form.get('fullName'); }
  get userName() {return this.form.get('userName'); }
  get email() {return this.form.get('email'); }
  get contactNumber() {return this.form.get('contactNumber'); }
  get avatarUri() {return this.form.get('avatarUri'); }
  get bankingRunoverUri() {return this.form.get('bankingRunoverUri'); }
  get creditCardNo() {return this.form.get('bankingRunoverUri'); }
  get creditCardType() {return this.form.get('bankingRunoverUri'); }


  onClose(): void {
    this.dialogRef.close();
  }

  onCreate(): void {
    if (this.form.valid) {
      this.service.postResidentInfo(this.form.value).subscribe(data => console.log(data));
    } else {
      validateAllFormFields(this.form);
    }
  }

  onUpdate(): void {
    console.log('data when merged');
    const merged = merge(this.form.value, this.data) as ResidentInfo;
    console.log(merged);
    if (this.form.valid) {
      this.service.putResidentInfoById(merged).subscribe(data => console.log('updated', data));
    } else {
      validateAllFormFields(this.form);
    }
  }
}
