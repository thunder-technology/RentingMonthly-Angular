import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Info, ResidentInfo} from '../models/user';
import {Url} from '../models/url';

@Injectable({
  providedIn: 'root'
})
export class ResidentInfoService {

  constructor(private http: HttpClient) { }

  getInfo(): Observable<Info> {
    return this.http.get<Info>(Url.urlResidents);
  }

  deleteResidentById(body: ResidentInfo): Observable<HttpResponse<ResidentInfo>> {
    return this.http.delete<ResidentInfo>(Url.urlResidentsById(body.userId), {
      observe: 'response',
      responseType: 'json'
    })
  }

  getResidentInfoById(id: number): Observable<ResidentInfo> {
    return this.http.get<ResidentInfo>(Url.urlResidentsById(id));
  }

  postResidentInfo(body: ResidentInfo): Observable<HttpResponse<ResidentInfo>> {
    return this.http.post<ResidentInfo>(Url.urlResidents, body, {
      observe: 'response',
      responseType: 'json'
    });
  }

  putResidentInfoById(body: ResidentInfo) {
    return this.http.put<ResidentInfo>(Url.urlResidentsById(body.userId), body, {
      observe: 'response',
      responseType: 'json'
    })
  }
}
