import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {

  constructor(private router: Router,private cookies:CookieService) { }

  ngOnInit(): void {
  }

  token: string;

  // Método para iniciar sesión
  login(email: string, password: string) {
    //Esto es una promesa con la cual nos registramos usando email y password, el metodo then recoge la respuesta de la promesa
    firebase.auth().signInWithEmailAndPassword(email, password).then(

      response => {
        //En la respuesta obtenemos el token si el usuario actual es correcto, esto es otra promesa que gestionamos con thne
        //Despues guardamos el token devuelto en una variable
        firebase.auth().currentUser?.getIdToken().then(
          token => {
            this.token = token;
            this.cookies.set("token",this.token);
            this.router.navigate(['']);
          }
        )
      }
    );
  }

  //Metodo para obtener el token a traves del servicio
  getIdToken() {

    //return this.token;
    return this.cookies.get("token");
  }

  loginStatus(){
   
    
    //return this.token;
    return this.cookies.get("token");
  }

  logOut(){
    firebase.auth().signOut().then(()=>{
      this.token = "";
      this.cookies.set("token",this.token);
      this.router.navigate(['']);
    })
  }

}
