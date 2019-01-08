import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  constructor(private http: HttpClient) { }

  public getLiveData(): Observable<any> {
    return this.http.get('http://192.168.8.104:8080/api/live/data');
  }
}
