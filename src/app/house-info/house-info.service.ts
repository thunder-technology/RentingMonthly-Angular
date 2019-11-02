import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Info} from '../models/user';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {HouseExtraInfo, HouseInfo, Houses} from '../models/house';
import {Url} from '../models/url';

@Injectable({
  providedIn: 'root'
})
export class HouseInfoService {
  urlHouse: string;
  urlHouseExtraInfoes: string;
  urlLandlord: string;

  constructor(private http: HttpClient) {
    this.urlHouse = Url.url + '/houses';
    this.urlHouseExtraInfoes = Url.url + '/houseExtraInfoes';
    this.urlLandlord = Url.url + '/landlords';
  }

  getHouseInfo(): Observable<HouseInfo> {
    return this.http.get<HouseInfo>(this.urlHouse);
  }

  getHouseInfoByHouseId(id: number): Observable<Houses> {
    return this.http.get<Houses>(this.urlHouse + '/' + id);
  }

  deleteHouseInfoByHouseId(id: number): Observable<HttpResponse<HouseInfo>> {
    return this.http.delete<HouseInfo>(this.urlHouse + '/' + id, {
      observe: 'response',
      responseType: 'json'
    })
  }

  postHouseInfo(body: Houses): Observable<Houses> {
    return this.http.post<Houses>(this.urlHouse, {
      observe: 'response',
      responseType: 'json'
    })
  }

  putHouseInfo(body: Houses, id: number): Observable<Houses> {
    return this.http.put<Houses>(this.urlHouse + '/' + id, {
      observe: 'response',
      responseType: 'json'
    })
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




  updateHouseInfo(body: Houses): Observable<Houses> {
    return this.http.put<Houses>(this.urlLandlord, body);
  }

  private getHouseInfoRes(): Observable<HttpResponse<Info>> {
    return this.http.get<Info>(
        this.urlLandlord, { observe: 'response', responseType: 'json'}
    );
  }
}
