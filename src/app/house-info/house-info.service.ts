import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Info} from '../models/user';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {HouseExtraInfo, HouseInfo, Houses} from '../models/house';

@Injectable({
  providedIn: 'root'
})
export class HouseInfoService {
  // private api = 'https://api.rentingmonthly.com';
  // private urlHouse = this.api + '/houses';
  // private urlHouseExtraInfoes = this.api + '/houseExtraInfoes';
  // private urlLandlord = this.api + '/landlords';

  private url = 'http://rentingmonthlyserver-env.siexzuwthp.us-east-1.elasticbeanstalk.com';
  private urlHouse = this.url + '/houses';
  private urlHouseExtraInfoes = this.url + '/houseExtraInfoes';
  private urlLandlord = this.url + '/landlords';

  constructor(private http: HttpClient) { }

  postHouseInfoByLandLordId(id: number): Observable<HouseInfo> {
    return this.http.get<HouseInfo>(this.urlLandlord + '/' + id + 'houses');
  }

  getHouseInfo(): Observable<HouseInfo> {
    return this.http.get<HouseInfo>(this.urlHouse);
  }

  getHouseInfoByHouseId(id: number): Observable<Houses> {
    return this.http.get<Houses>(this.urlHouse + '/' + id);
  }

  getHouseExtraInfo(): Observable<HouseInfo> {
    return this.http.get<HouseInfo>(this.urlHouseExtraInfoes);
  }

  getHouseInfoByLandLordId(id: number): Observable<HouseInfo> {
    return this.http.get<HouseInfo>(this.urlLandlord + '/' + id + '/houses');
  }

  deleteHouseInfoByLandLordId(id: number): Observable<HttpResponse<HouseInfo>> {
    return this.http.delete<HouseInfo>(this.urlLandlord + '/' + id + '/houses', {
      observe: 'response',
      responseType: 'json'
    });
  }

  deleteHouseInfoByHouseId(id: number): Observable<HttpResponse<HouseInfo>> {
    return this.http.delete<HouseInfo>(this.urlHouse + '/' + id, {
      observe: 'response',
      responseType: 'json'
    })
  }

  postHouseInfo(body: Houses): Observable<Houses> {
    return this.http.post<Houses>(this.urlLandlord, body);
  }

  updateHouseInfo(body: Houses): Observable<Houses> {
    return this.http.put<Houses>(this.urlLandlord, body);
  }

  private getHouseInfoRes(): Observable<HttpResponse<Info>> {
    return this.http.get<Info>(
        this.urlLandlord, { observe: 'response', responseType: 'json'}
    );
  }
}
