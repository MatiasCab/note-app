import { Component, OnInit } from '@angular/core';
import { ModalAgregarEditarComponent } from '../modal-agregar-editar/modal-agregar-editar.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-boton-agregar',
  templateUrl: './boton-agregar.component.html',
  styleUrls: ['./boton-agregar.component.sass']
})
export class BotonAgregarComponent implements OnInit {


  constructor(public modalService: NgbModal) { }
  agregarNota() {
    this.modalService.open(ModalAgregarEditarComponent);
  }

  ngOnInit(): void {
  }
}
