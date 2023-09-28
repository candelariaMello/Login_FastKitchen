import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoguearseService {

  constructor() { }

  LoggedIn:boolean=false;

  getLoggedIn():boolean{
    return this.LoggedIn;
  }

  setLoggedIn(value:boolean):void{
    this.LoggedIn=value;
  }
}
