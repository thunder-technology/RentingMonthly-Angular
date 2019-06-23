import { Component, OnInit } from '@angular/core';
import { LandlordInfo, LandlordInfoService } from './landlord-info.service';

@Component({
  selector: 'app-landlord-table',
  templateUrl: './landlord-table.component.html',
  styleUrls: ['./landlord-table.component.scss']
})
export class LandlordTableComponent implements OnInit {
  headers: string[];
  landlord: LandlordInfo;
  constructor(private landlordInfoService: LandlordInfoService) { }

  ngOnInit() {
  }

  clear() {
    this.landlord = undefined;
    this.headers = undefined;
  }

  showLandlordInfo() {
    this.landlordInfoService.getLandlord()
        .subscribe(
            (data: LandlordInfo) => this.landlord = {...data}
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
          this.landlord = { ... resp.body };
        });
  }

}
