import { Component, OnInit } from '@angular/core';
// import { InfoService } from '../info.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  landlords;
  showLandlordInfo = true;

  toggleLandlordInfo() { this.showLandlordInfo = !this.showLandlordInfo; }


  constructor(
      // private info: InfoService,
  ) {
    // this.landlords = this.info.getLandlordFromJson();
  }


  ngOnInit() {
  }

}
