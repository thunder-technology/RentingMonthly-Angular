import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Info} from '../models/user';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {HouseInfo, Houses} from '../models/house';

@Injectable({
  providedIn: 'root'
})
export class HouseInfoService {
  private api = 'api.rentingmonthly.com';
  private urlHouse = this.api + '/houses';
  private urlLandlord = this.api + '/landlords';

  // private urlLandlord = 'http://rentingmonthlyserver-env.siexzuwthp.us-east-1.elasticbeanstalk.com/landlords';
  // private urlHouse = 'http://rentingmonthlyserver-env.siexzuwthp.us-east-1.elasticbeanstalk.com/houses';

  constructor(private http: HttpClient) { }

  getInfo(): Observable<HouseInfo> {
    return this.http.get<HouseInfo>(this.urlHouse);
  }

  postHouseInfoByLandLordId(id: number): Observable<HouseInfo> {
    return this.http.get<HouseInfo>(this.urlLandlord + '/' + id + 'houses');
  }

  getHouseInfoByLandLordId(id: number): Observable<HouseInfo> {
    return this.http.get<HouseInfo>(this.urlLandlord + '/' + id + 'houses');
  }

  deleteHouseInfoByLandLordId(id: number): Observable<HttpResponse<HouseInfo>> {
    return this.http.delete<HouseInfo>(this.urlLandlord + '/' + 'house', {
      observe: 'response',
      responseType: 'json'
    });
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
