import { NotasService } from './../notas.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Ciudad } from '../Ciudad';
import { Color } from '../Color';
import { Note, EmptyNote } from '../Note';
import { GetCitiesService } from '../get-cities.service';

@Component({
  selector: 'app-modal-agregar-editar',
  templateUrl: './modal-agregar-editar.component.html',
  styleUrls: ['./modal-agregar-editar.component.sass']
})
export class ModalAgregarEditarComponent implements OnInit {
  @Input() notaEntrada?: Note;

  nota: EmptyNote = new EmptyNote();
  titulo: string = 'Agregar Nota';
  textoBoton: string = 'Agregar';

  // Datos mockeados
  ciudades: Ciudad[] = [];
  getCities() {
    this.citiesService.getCities().subscribe(resultado => {
      this.ciudades = resultado;
    });
  }
  colores: Color[] = [
    { nombre: 'Rojo', selector: 'btnRed' },
    { nombre: 'Verde', selector: 'btnGreen' },
    { nombre: 'Amarillo', selector: 'btnYellow' },
    { nombre: 'Cielo', selector: 'btnSky' }
  ];


  constructor(public modalActivo: NgbActiveModal, private servicioNotas: NotasService, private citiesService: GetCitiesService) { }

  ngOnInit(): void {
    if (this.notaEntrada) {
      this.titulo = 'Editar Nota';
      this.textoBoton = 'Editar';
      this.nota = { ...this.notaEntrada };
    }
    this.getCities();
  }

  guardarNota() {
    if (!this.nota.id) {
      this.servicioNotas.crearNota(this.nota);
    } else {
      this.servicioNotas.editarNota(this.nota);
    }
    this.modalActivo.close();
  }
}
