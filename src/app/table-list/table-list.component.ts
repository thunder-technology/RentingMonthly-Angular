import {Component, Injectable, OnInit} from '@angular/core';
// import { InfoService } from '../info.service';
import { LandlordTableComponent } from '../landlord-table/landlord-table.component';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class TableListComponent implements OnInit {
  landlords;
  showLandlordInfo = true;

  toggleLandlordInfo() { this.showLandlordInfo = !this.showLandlordInfo; }


  constructor(
      // private landlordInfo: LandlordTableComponent,
  ) {
    // this.landlordInfo.showLandlordInfo();
  }


  ngOnInit() {

    // this.landlords = this.landlordInfo.getLandlord().landlord_info;
  }

}
