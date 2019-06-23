import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Config} from 'codelyzer';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  landlord = [];
  housing = [];
  constructor(private http: HttpClient) {

  }

  addToLandlord(landlord) {
  this.landlord.push(landlord);
  }

  getLandlord() {
    return this.landlord;
  }

  getLandlordFromJson() {
    return this.http.get('/assets/info.json');
  }

}
