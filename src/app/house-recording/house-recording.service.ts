import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HouseInfo } from '../models/house';
import {LandlordInfo} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class HouseRecordingService {
  private url = 'http://rentingmonthlyserver-env.siexzuwthp.us-east-1.elasticbeanstalk.com/landlords';

  constructor(private http: HttpClient) { }

  getHouseInfo(id: number): Observable<HouseInfo> {
    return this.http.get<HouseInfo>(this.url + '/' + id + 'houses');
  }

  postHouseInfo(body: HouseInfo, id: number): Observable<HouseInfo> {
    return this.http.post<HouseInfo>(this.url + '/' + id + 'houses', body);
  }

  postHouseInfoRes(body: HouseInfo): Observable<HttpResponse<HouseInfo>> {
    return this.http.post<HouseInfo>(this.url, body, {
      observe: 'response',
      responseType: 'json'
    });
  }

  getLandlordInfoById(id: number): Observable<LandlordInfo> {
    return this.http.get<LandlordInfo>(this.url + '/' + id);
  }
}
