import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {HouseInfo, Houses} from '../models/house';
import {LandlordInfo} from '../models/user';
import {HouseInfoService} from '../house-info/house-info.service';

@Injectable({
  providedIn: 'root'
})
export class HouseRecordingService {
  constructor(private http: HttpClient, private service: HouseInfoService) { }

  postHouseInfo(body: Houses): Observable<Houses> {
    return this.service.postHouseInfo(body);
  }

  putHouseInfo(body: Houses, id: number): Observable<Houses> {
    return this.service.putHouseInfo(body, id);
  }
}
