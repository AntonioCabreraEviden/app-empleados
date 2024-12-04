import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrl: './empleado-hijo-c.component.css'
})
export class EmpleadoHijoCComponent {

  /* input recoge las variables enviadas por el padre, hay que quitar el tipado stricto y cambiar 
  en el html los nombre a los indicados */
  @Input() empleadoLista:Empleado;
  @Input() indice:number;

  //constructor(private miServicio:ServicioEmpleadoService){}

  arrayCaracteristicas:string[] = [];

  agregarCaracteristicas(caracteristica: string) {
    /* this.miServicio.muestraMensaje("La nueva caracteristica es "+caracteristica);*/
    this.arrayCaracteristicas.push(caracteristica); 
  }



}
