import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http: HttpClient) { }
  connect() {
    return this.http.get('http://192.168.15.123:3300/', { responseType: 'text' as 'json' })
  }
}
