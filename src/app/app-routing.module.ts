import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {PaginaHomeComponent} from './pagina-home/pagina-home.component';
import {PersonajesComponent} from './personajes/personajes.component';

const routes: Routes = [
  {
    path:'home',
    component:PaginaHomeComponent
  },
  {
    path:'personajes',
    component:PersonajesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
