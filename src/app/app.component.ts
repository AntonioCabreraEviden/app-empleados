import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    //Esto inicializa el coponente firebase, aladiendo la configuracio que nos proporciona desde su pagina web
    firebase.initializeApp(this.firebaseConfig);
  }

  constructor(private loginService:LoginService){

  }


  // TODO: Replace the following with your app's Firebase project configuration
  // See: https://firebase.google.com/docs/web/learn-more#config-object
  firebaseConfig = {
    apiKey: "AIzaSyC-IWtlohCQX-HsD_8HtcoBEAxhemiy8KM",
    authDomain: "formacionangularempleados.firebaseapp.com",
    
  };


  loginStatus(){
    return this.loginService.loginStatus();
  }

  logOut(){
    this.loginService.logOut();
  }

}
