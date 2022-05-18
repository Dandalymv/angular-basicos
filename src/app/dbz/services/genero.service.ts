import { Injectable } from '@angular/core';
import { GeneroMusical } from '../interfaces/dbz.interface';

@Injectable()
export class GeneroService{

    private _generos: GeneroMusical[] = [
        {
          genero: 'Música clásica',
          anio: 1820
        },
        {
          genero: 'Blues',
          anio: 1890
        },
        {
          genero: 'Jazz',
          anio: 1890
        },
        {
          genero: 'Rock and Roll',
          anio: 1950
        }
      ]

      get generos(): GeneroMusical[]{
          return [...this._generos];
      }

      constructor(){
          console.log('Servicio Generos inicializado')
      }

      agregarGenero(gender: GeneroMusical){
        this._generos.push(gender)
      }
    

}