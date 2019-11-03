import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Houses} from '../models/house';
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
