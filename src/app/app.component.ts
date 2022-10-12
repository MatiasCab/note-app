import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAgregarEditarComponent } from './modal-agregar-editar/modal-agregar-editar.component';
import { Note } from './Note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'note-app';
  nota: Note = { temperatura: '12', fechaFormateada: '2018-06-12T19:30', id: '524398', clase: 'Cielo', titulo: 'asdasd', ciudad: '-11;100', cuerpo: 'asdasdasd'};

  mostrar($event: Note) {
    console.log($event);
    console.log(this.nota);
  }

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(ModalAgregarEditarComponent);
    modalRef.componentInstance.notaEntrada = this.nota;
  }

  buttonToggle() {
    document.body.classList.toggle('dark');
  }
}
