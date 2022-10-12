import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudad } from './Ciudad';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetCitiesService {

  private citiesUrl = 'api/cities';
  constructor(private http: HttpClient) { }

  getCities(): Observable<Ciudad[]> {
    return this.http.get<Ciudad[]>(this.citiesUrl);
  }
}
