import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Ciudad } from './Ciudad';
import { TEMPERATURAS } from './mock-temperaturas';


@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor(private http: HttpClient) { }

  /*
  getWeather(date:Date, ciudad:Ciudad) {
    return this.http.get<any>(`https://api.open-meteo.com/v1/forecast?latitude=${ciudad.lat}&longitude=${ciudad.long}&hourly=temperature_2m&start_date=${fecha}&end_date=${fecha}`);
  }
  */

  getWeather(date:Date, ciudad:Ciudad): Observable<string | undefined>{
    let data = TEMPERATURAS.get(ciudad.nombre);
    return of(data);
  }


  /*
  async getClima(date:Date, ciudad:Ciudad){
    try {
      let fecha = date.toISOString().split('T')[0];
      let horaParseada = date.getHours();
      let data = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${ciudad.lat}&longitude=${ciudad.long}&hourly=temperature_2m&start_date=${fecha}&end_date=${fecha}`);
      let obj = await data.json();
      return obj.hourly.temperature_2m[horaParseada];  
    } catch (e) {
      return undefined;
    }
    
  }
  */
}
