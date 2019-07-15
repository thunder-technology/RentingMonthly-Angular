import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HouseInfo } from '../models/house';

@Injectable({
  providedIn: 'root'
})
export class HouseRecordingService {
  private url = 'http://rentingmonthlyserver-env.siexzuwthp.us-east-1.elasticbeanstalk.com/houses';

  constructor(private http: HttpClient) { }

  getHouseInfo(): Observable<HouseInfo> {
    return this.http.get<HouseInfo>(this.url);
  }

  postHouseInfo(body: HouseInfo): Observable<HouseInfo> {
    return this.http.post<HouseInfo>(this.url, body);
  }

  postHouseInfoRes(body: HouseInfo): Observable<HttpResponse<HouseInfo>> {
    return this.http.post<HouseInfo>(this.url, body, {
      observe: 'response',
      responseType: 'json'
    });
  }
}
