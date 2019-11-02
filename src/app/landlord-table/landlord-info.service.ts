import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Info, LandlordInfo, ResidentInfo} from '../models/user';
import {Url} from '../models/url';


@Injectable({
  providedIn: 'root'
})
export class LandlordInfoService {

  constructor(private http: HttpClient) { }

  getLandlordInfo(): Observable<Info> {
    return this.http.get<Info>(Url.urlLandLord);
  }

  getLandlordInfoById(id: number): Observable<LandlordInfo> {
    return this.http.get<LandlordInfo>(Url.urlLandLordById(id));
  }


  deleteLandlordById(id: number): Observable<HttpResponse<LandlordInfo>> {
    return this.http.delete<LandlordInfo>(Url.urlLandLordById(id), {
      observe: 'response',
      responseType: 'json'
    });
  }

  deleteResidentById(id: number) {
    return this.http.delete<ResidentInfo>(Url.urlResidentsById(id), {
      observe: 'response',
      responseType: 'json'
    })
  }

  postLandlordInfo(body: LandlordInfo): Observable<HttpResponse<LandlordInfo>> {
    return this.http.post<LandlordInfo>(Url.urlLandLord, body, {
      observe: 'response',
      responseType: 'json'
    });
  }

  putLandlordInfoById(body: LandlordInfo): Observable<LandlordInfo> {
    return this.http.put<LandlordInfo>(Url.urlLandLordById(body.userId), {
      observe: 'response',
      responseType: 'json'
    })
  }

  postResidentInfo(body: ResidentInfo): Observable<HttpResponse<ResidentInfo>> {
    return this.http.post<ResidentInfo>(Url.urlResidents, body, {
      observe: 'response',
      responseType: 'json'
    })
  }

  updateLandLordInfo(body: LandlordInfo, id: number): Observable<HttpResponse<LandlordInfo>> {
    return this.http.put<LandlordInfo>(Url.urlLandLordById(id), body, {
      observe: 'response',
      responseType: 'json'
    });
  }
}
