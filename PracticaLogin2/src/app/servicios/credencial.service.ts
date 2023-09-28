import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredencialService {

  constructor() { }

  controlLogin(obj:any):boolean{
    const credencial = obj.email==='113905@tecnicatura.frc.utn.edu.ar' && obj.password==='44896256';
    if(credencial){
      return true;
    }
    return false;
  }

  
}
