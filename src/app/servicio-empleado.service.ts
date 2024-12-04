import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadoService {

  muestraMensaje(mensaje:string){
    alert(mensaje);
  }

constructor() { }

}
