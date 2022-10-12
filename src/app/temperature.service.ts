import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Ciudad } from './Ciudad';
import { Temperature } from './Temperature';



@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  private temperaturesUrl = 'api/temps';
  constructor(private http: HttpClient) { }

  /*
  getWeather(date:Date, ciudad:Ciudad) {
    return this.http.get<any>(`https://api.open-meteo.com/v1/forecast?latitude=${ciudad.lat}&longitude=${ciudad.long}&hourly=temperature_2m&start_date=${fecha}&end_date=${fecha}`);
  }
  */

  getWeather(): Observable<Temperature[]>{
    console.log('entre');
    return this.http.get<Temperature[]>(this.temperaturesUrl);
    
  }

}
