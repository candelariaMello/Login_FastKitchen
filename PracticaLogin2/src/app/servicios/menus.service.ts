import { Injectable } from '@angular/core';
import { Menu } from '../clases/menu';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor() { }

  menus: Menu[]= [{
    nombre: 'Polenta',
    receta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.',
    fecha: new Date(),
    baja:false
  },
  {
    nombre: 'Ratatouille',
    receta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.',
    fecha: new Date(),
    baja:false
  },
  {
    nombre: 'Papas Bravas',
    receta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.',
    fecha: new Date(),
    baja:false
  },
  {
    nombre: 'Pizza',
    receta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.',
    fecha: new Date(),
    baja:false
  },
  {
    nombre: 'Fideos con Pesto',
    receta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.',
    fecha: new Date(),
    baja:false
  },
  {
    nombre: 'Gnocchi con salsa',
    receta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.',
    fecha: new Date(),
    baja:false
  }];

  getMenusOriginal(){
    return this.menus;
  }
 
}
