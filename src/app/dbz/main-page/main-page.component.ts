import { Component } from '@angular/core';
import { GeneroMusical, Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

   //inyeccion de dependencia
   constructor(){
  }

  nuevo: Personaje = {
    nombre:'Maestro Roshi',
    poder: 1000
  }

  nuevoGenero: GeneroMusical = {
    genero: 'Salsa',
    anio: 1970
  }
 


}
