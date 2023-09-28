import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CredencialService } from '../servicios/credencial.service';
import { LoguearseService } from '../servicios/loguearse.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() loginSuccess = new EventEmitter();
  email:string="";
  password:string="";

  constructor( private credencialService : CredencialService, public loguearseServ: LoguearseService){}

  Submit(myForm: NgForm){
    if(myForm.valid && this.credencialService.controlLogin(myForm.value)){

      console.log(this.email, this.password);
      alert("Bienvenido + " + this.email);
      this.loguearseServ.setLoggedIn(true);
      this.loginSuccess.emit();
    }
    else{
      alert("Usuario y contraseña incorrectos.");
    }
  }

}
