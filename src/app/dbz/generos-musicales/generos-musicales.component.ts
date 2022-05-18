import { Component, Input } from '@angular/core';
import { GeneroMusical } from '../interfaces/dbz.interface';
import { GeneroService } from '../services/genero.service';

@Component({
  selector: 'app-generos-musicales',
  templateUrl: './generos-musicales.component.html'
})
export class GenerosMusicalesComponent {

  // @Input('generoImportado') generos: GeneroMusical[] = []

  constructor(private generoService: GeneroService){
  }

  get generos(): GeneroMusical[]{
    return this.generoService.generos
  }

}
