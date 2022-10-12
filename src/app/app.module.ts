import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalAgregarEditarComponent } from './modal-agregar-editar/modal-agregar-editar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NoteComponent } from './note/note.component';
import { GrillaComponent } from './grilla/grilla.component';
import { BotonAgregarComponent } from './boton-agregar/boton-agregar.component';
import { ModalEliminarComponent } from './modal-eliminar/modal-eliminar.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ModalAgregarEditarComponent,
    NavBarComponent,
    FooterComponent,
    NoteComponent,
    GrillaComponent,
    BotonAgregarComponent,
    ModalEliminarComponent
  ],
  imports: [
    BrowserModule,
    
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
