import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoguearseService } from '../servicios/loguearse.service';
import { MenusService } from '../servicios/menus.service';
import { Menu } from '../clases/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @Output() onHome = new EventEmitter();
  constructor(private loguearseServ: LoguearseService, private menusService: MenusService) { }

  menus: Menu[] = this.menusService.getMenusOriginal();

  loggedIn:boolean=this.loguearseServ.getLoggedIn();

  cerrarSesion(){
    this.loguearseServ.setLoggedIn(false);
    this.onHome.emit();
  }

  darBajaMenu(nombre:string):void{
    let menu= this.menus.find((m)=> m.nombre === nombre);
    let index= this.menus.indexOf(menu!);
    this.menus[index].baja=true;
    console.log(menu);
  }



}
