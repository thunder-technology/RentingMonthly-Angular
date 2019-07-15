import { Component, OnInit } from '@angular/core';
import {HouseInfoService} from './house-info.service';
import {Houses} from '../models/house';

@Component({
  selector: 'app-house-info',
  templateUrl: './house-info.component.html',
  styleUrls: ['./house-info.component.scss']
})
export class HouseInfoComponent implements OnInit {
  private headers: string[];
  private houses: Houses[];

  constructor(private service: HouseInfoService) {
    this.headers = ['address', 'city', 'province', 'House Type', 'Intersection', 'postCode', 'totalRooms', 'description'];
  }

  ngOnInit() {
    this.service.getInfo()
        .subscribe(data => {
          this.houses = data._embedded.houses;
        });
  }

}
