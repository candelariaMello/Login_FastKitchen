import { Component } from '@angular/core';
import { LoguearseService } from './servicios/loguearse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticaLogin2';

  loginHome=true;

  onLogin(){
    this.loginHome=false;
  }
  onHome(){
    this.loginHome=true;
  }

  // logOut(){
  //   this.loginHome= false;
  //   this.loguearseServ.setLoggedIn(false);
  // }
  
}
