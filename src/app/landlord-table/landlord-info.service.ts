import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Info, LandlordInfo, LandLordInfoPost, UserInfo} from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class LandlordInfoService {
  // private api = 'https://api.rentingmonthly.com';
  // private url = this.api + '/users/';
  // private urlLandLordSlash = this.api + '/landlords/';
  // private urlLandLord = this.api + '/landlords';

  private local = 'http://rentingmonthlyserver-env.siexzuwthp.us-east-1.elasticbeanstalk.com';
  private url = 'http://rentingmonthlyserver-env.siexzuwthp.us-east-1.elasticbeanstalk.com/users/';
  private urlLandLordSlash = 'http://rentingmonthlyserver-env.siexzuwthp.us-east-1.elasticbeanstalk.com/landlords/';
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
    return this.http.delete<LandLordInfoPost>(this.urlLandLord + '/' + id, {
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
    return this.http.post<LandLordInfoPost>(this.urlLandLordSlash, body);
  }

  postLandlordInfoRes(body: LandLordInfoPost): Observable<HttpResponse<LandLordInfoPost>> {
    return this.http.post<LandLordInfoPost>(this.urlLandLordSlash, body, {
      observe: 'response',
      responseType: 'json'
    });
  }

  updateUserInfo(body: UserInfo): Observable<UserInfo> {
    return this.http.put<UserInfo>(this.url + '/' + body.userId, body);
  }

  updateLandLordInfo(body: LandlordInfo): Observable<HttpResponse<LandlordInfo>> {
    return this.http.put<LandlordInfo>(this.urlLandLord + '/' + body.landlordId, body, {
      observe: 'response',
      responseType: 'json'
    });
  }

  getUserInfoRes(): Observable<HttpResponse<Info>> {
    return this.http.get<Info>(
        this.url, { observe: 'response', responseType: 'json'}
    );
  }


}
