import { Component,Input } from '@angular/core';

import { Personaje, GeneroMusical } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
import { GeneroService } from '../services/genero.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})

export class AgregarComponent {
  
  @Input() nuevo: Personaje = {
    nombre:'',
    poder: 0
  }

  @Input() nuevoGenero: GeneroMusical = {
    genero: '',
    anio: 0
  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  // @Output() onNewGender: EventEmitter<GeneroMusical> = new EventEmitter();

  constructor( 
    private dbzService: DbzService, 
    private generoService: GeneroService){
  }

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    };
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }

  agregarGenero(){
    if(this.nuevoGenero.genero.trim().length === 0){
        return;
    }
    this.generoService.agregarGenero(this.nuevoGenero)
    // this.onNewGender.emit(this.nuevoGenero)   
    this.nuevoGenero = {
      genero: '',
      anio: 0
    };     
  }

}
