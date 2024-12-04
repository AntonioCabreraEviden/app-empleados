import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient,private loginService:LoginService) { }

  cargarEmpleados() {
    //Esto hace la peticion a la base de datos,es un observable, es decir refresca constantemente la info 
    console.log("Cargando la base de datos");    
    const token = this.loginService.getIdToken();
    return this.httpClient.get('https://formacionangularempleados-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth='+ token);

  }

  guardarEmpleados(empleados: Empleado[]) {
    const token = this.loginService.getIdToken();
    this.httpClient.put('https://formacionangularempleados-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth='+ token, empleados)
      .subscribe({
        next: (mensaje) => {
          console.log('Se han registrado correctamente los empleados ');
          console.log(mensaje);          
        },
        error: (mensaje) => console.log('Error ' +mensaje)
      });
  }

  actualizarEmpleado(indice: number, empleado: Empleado) {
    const token = this.loginService.getIdToken();

    this.httpClient.put('https://formacionangularempleados-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json?auth='+ token, empleado)
      .subscribe({
        next: (mensaje) => {
          console.log('Se ha actualizado correctamente el empleado ');
          console.log(mensaje);
          
        },
        error: (mensaje) => console.log('Error ' +mensaje)
      });
  }


  eliminarEmpleado(indice: number) {
    const token = this.loginService.getIdToken();

    this.httpClient.delete('https://formacionangularempleados-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json?auth='+ token)
      .subscribe({
        next: (mensaje) => {
          console.log('Se ha eliminado correctamente el empleado ');
          console.log(mensaje);
          
        },
        error: (mensaje) => console.log('Error ' +mensaje)
      });
  }

}
