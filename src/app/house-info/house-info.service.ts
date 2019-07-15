import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Info, UserInfo} from '../models/user';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {HouseInfo, Houses} from '../models/house';

@Injectable({
  providedIn: 'root'
})
export class HouseInfoService {
  private url = 'http://rentingmonthlyserver-env.siexzuwthp.us-east-1.elasticbeanstalk.com/houses';

  constructor(private http: HttpClient) { }

  getInfo(): Observable<HouseInfo> {
    return this.http.get<HouseInfo>(this.url);
  }

  getHouseInfoById(id: number): Observable<HouseInfo> {
    return this.http.get<HouseInfo>(this.url + '/' + id);
  }

  deleteHouseInfoById(id: number): Observable<HttpResponse<HouseInfo>> {
    return this.http.delete<HouseInfo>(this.url + '/' + id, {
      observe: 'response',
      responseType: 'json'
    });
  }

  postHouseInfo(body: Houses): Observable<Houses> {
    return this.http.post<Houses>(this.url, body);
  }

  updateHouseInfo(body: Houses): Observable<Houses> {
    return this.http.put<Houses>(this.url, body);
  }

  private getHouseInfoRes(): Observable<HttpResponse<Info>> {
    return this.http.get<Info>(
        this.url, { observe: 'response', responseType: 'json'}
    );
  }
}
