import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { GenerosMusicalesComponent } from './generos-musicales/generos-musicales.component';
import { DbzService } from './services/dbz.service';
import { GeneroService } from './services/genero.service';


@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent,
    GenerosMusicalesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    MainPageComponent
  ],
  providers: [
    DbzService,
    GeneroService
  ]
})
export class DbzModule { }
