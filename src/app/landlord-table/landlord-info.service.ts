import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface LandlordInfo {
  user_name: string;
  full_name: string;
  // residential_address: string;
  // contact_number: number;
  // email: string;
}

@Injectable({
  providedIn: 'root'
})
export class LandlordInfoService {
  url = 'assets/info.json';

  constructor(private http: HttpClient) { }

  getLandlord() {
    return this.http.get<LandlordInfo>(this.url);
  }

  getLandlordInfoRes(): Observable<HttpResponse<LandlordInfo>> {
    return this.http.get<LandlordInfo>(
        this.url, { observe: 'response', responseType: 'json'}
    );
  }
}
