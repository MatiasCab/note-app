import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Ciudad } from './Ciudad';
import { Temperature } from './Temperature';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    

    const cities: Ciudad[] = [
      { nombre: 'Buenos Aires', lat: '-34,6118', long: '-58,4173' },
      { nombre: 'Montevideo', lat: '-34,8941', long: '-56,0675' },
      { nombre: 'Paris', lat: '48,8567', long: '2,3510' },
      { nombre: 'Tokyo', lat: '35,6785', long: '139,6823' },
      { nombre: 'New York', lat: '41,6785', long: '-139,6823' }
    ];

    const temps: Temperature[] = [
      { lat: '-34,6118', long: '-58,4173', temp: '31ºC' },
      { lat: '-34,8941', long: '-56,0675', temp: '32ºC' },
      { lat: '48,8567', long: '2,3510', temp: '33ºC' },
      { lat: '35,6785', long: '139,6823', temp: '34ºC' },
      { lat: '41,6785', long: '-139,6823', temp: '35ºC' }
    ];
    return {cities, temps};
  }
}
