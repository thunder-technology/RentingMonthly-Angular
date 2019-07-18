import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Info, LandlordInfo, LandLordInfoPost, UserInfo} from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class LandlordInfoService {
  private url = 'http://rentingmonthlyserver-env.siexzuwthp.us-east-1.elasticbeanstalk.com/users/';
  private urlLandLordPost = 'http://rentingmonthlyserver-env.siexzuwthp.us-east-1.elasticbeanstalk.com/landlords/';
  private urlLandLord = 'http://rentingmonthlyserver-env.siexzuwthp.us-east-1.elasticbeanstalk.com/landlords';

  constructor(private http: HttpClient) { }

  getInfo(): Observable<Info> {
    return this.http.get<Info>(this.url);
  }

  getUserInfoById(id: number): Observable<UserInfo> {
    return this.http.get<UserInfo>(this.url + '/' + id);
  }

  getLandlordInfo(): Observable<Info> {
    return this.http.get<Info>(this.urlLandLord);
  }

  getLandlordInfoById(id: number): Observable<LandlordInfo> {
    return this.http.get<LandlordInfo>(this.urlLandLord + '/' + id);
  }

  deleteLandlordById(id: number): Observable<HttpResponse<LandLordInfoPost>> {
    return this.http.delete<LandLordInfoPost>(this.urlLandLordPost + '/' + id, {
      observe: 'response',
      responseType: 'json'
    });
  }

  deleteUserInfoById(id: number): Observable<HttpResponse<UserInfo>> {
    return this.http.delete<UserInfo>(this.url + '/' + id, {
      observe: 'response',
      responseType: 'json'
    });
  }

  postLandlordInfo(body: LandLordInfoPost): Observable<LandLordInfoPost> {
    return this.http.post<LandLordInfoPost>(this.urlLandLordPost, body);
  }

  postLandlordInfoRes(body: LandLordInfoPost): Observable<HttpResponse<LandLordInfoPost>> {
    return this.http.post<LandLordInfoPost>(this.urlLandLordPost, body, {
      observe: 'response',
      responseType: 'json'
    });
  }

  updateUserInfo(body: UserInfo): Observable<UserInfo> {
    return this.http.put<UserInfo>(this.url + '/' + body.userId, body);
  }

  updateLandlordInfo(body: LandLordInfoPost): Observable<LandLordInfoPost> {
    return this.http.put<LandLordInfoPost>(this.urlLandLordPost + '/' + body.user.userId + '/', body);
  }

  private getUserInfoRes(): Observable<HttpResponse<Info>> {
    return this.http.get<Info>(
        this.url, { observe: 'response', responseType: 'json'}
    );
  }
}
