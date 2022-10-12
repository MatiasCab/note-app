import { TemperatureService } from './temperature.service';
import { Note } from './Note';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { GetCitiesService } from './get-cities.service';

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  notas?: Map<string, Note>;

  constructor(private servicioTemperatura: TemperatureService,  private cities: GetCitiesService) {
    this.notas = new Map<string, Note>();
  }

  obtenerNota(id: string): Note | undefined {
    if (this.notas) {
      return this.notas.get(id);
    }
    return undefined;
  }

  eliminarNota(id: string) {
    if (this.notas) {
      this.notas.delete(id);
    }
  }

  crearNota(nota: Note) {
    if (this.notas) {
      
      this.cities.getCities().subscribe(resultado => {
        nota.id = `${Math.floor(Math.random() * 1000000)}`;
        this.notas!.set(nota.id, nota);
        let ciudad = { nombre: 'a', lat: 'b', long: 'c' };
        resultado.forEach(element => {
          if (nota.ciudad == element.nombre) {
            ciudad = element;
          }
        });

        this.servicioTemperatura.getWeather().subscribe(resultado =>{
          resultado.forEach(element => {
            if (element.lat == ciudad.lat) {
              if(element.long == ciudad.long) {
                nota.temperatura = element.temp;
              }
            }
        });

      });
    });
  }
}

  editarNota(nota: Note) {
    if (this.notas) {
      this.notas.set(nota.id, nota);
    }
  }
}
