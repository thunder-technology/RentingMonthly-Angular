import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Info, UserInfo} from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class LandlordInfoService {
  private url = 'http://rentingmonthlyserver-env.siexzuwthp.us-east-1.elasticbeanstalk.com/users';
  constructor(private http: HttpClient) { }

  getInfo(): Observable<Info> {
    return this.http.get<Info>(this.url);
  }

  getUserInfoById(id: number): Observable<UserInfo> {
    return this.http.get<UserInfo>(this.url + '/' + id);
  }

  deleteUserInfoById(id: number): Observable<HttpResponse<UserInfo>> {
    return this.http.delete<UserInfo>(this.url + '/' + id, {
      observe: 'response',
      responseType: 'json'
    });
  }

  postUserInfo(body: UserInfo): Observable<UserInfo> {
    return this.http.post<UserInfo>(this.url, body);
  }

  updateUserInfo(body: UserInfo): Observable<UserInfo> {
    return this.http.put<UserInfo>(this.url + '/' + body.userId, body);
  }

  private getUserInfoRes(): Observable<HttpResponse<Info>> {
    return this.http.get<Info>(
        this.url, { observe: 'response', responseType: 'json'}
    );
  }
}
