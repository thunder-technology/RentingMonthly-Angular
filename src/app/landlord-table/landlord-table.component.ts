import {Component, Injectable, OnInit} from '@angular/core';
import { LandlordInfo, LandlordInfoService } from './landlord-info.service';

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
  // landlord: LandlordInfo;
  landlords: LandlordInfo;
  constructor(private landlordInfoService: LandlordInfoService) { }

  ngOnInit() {
      // this.showLandlordInfo();
  }

  getLandlord() {
      return this.landlords;
  }
  clear() {
    this.landlords = undefined;
    this.headers = undefined;
  }

  // showLandlordInfo() {
  //   this.landlordInfoService.getLandlord()
  //       .subscribe(
  //           (data: LandlordInfo) => this.landlord = {...data}
  //       )
  // }

    showLandlordInfo() {
        this.landlordInfoService.getLandlord()
            .subscribe(
                (data: LandlordInfo) => this.landlords = {...data}
            )
    }

  showLandlordInfoResponse() {
    this.landlordInfoService.getLandlordInfoRes()
    // resp type is `HttpResponse<LandlordInfo>`
        .subscribe(resp => {
          // display its header
          const keys = resp.headers.keys();
          this.headers = keys.map(key =>
              `${key}: ${resp.headers.get(key)}` );

          // access the body directly, which is typed as `LandlordInfo`.
          this.landlords = { ... resp.body };
        });
  }

  toString() {
      let str = '';
      for (let i = 0; i  < this.landlords.landlord_info.length; i++) {
          str += '<tr>';
          str += '<td>';
          str += this.landlords.landlord_info[i].user_name;
          str += '</td>';
          str += '<td>';
          str += this.landlords.landlord_info[i].full_name;
          str += '</td>';
          str += '</tr>';
      }
      return str;
  }

}
