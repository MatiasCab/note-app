import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NotasService } from '../notas.service';



@Component({
  selector: 'app-modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrls: ['./modal-eliminar.component.sass']
})
export class ModalEliminarComponent implements OnInit {

  @Input() noteId!: string;
  constructor(public modalActivo: NgbActiveModal, private noteService: NotasService) { }

  ngOnInit(): void {
  }

  delete() {
    this.noteService.eliminarNota(this.noteId);
    this.modalActivo.close();
  }

  closeModal() {
    this.modalActivo.close();
  }
  


}
