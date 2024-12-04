import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrl: './caracteristicas-empleado-c.component.css'
})
export class CaracteristicasEmpleadoCComponent {

  /* Esto nos permite lanzar mediante un metodo informacion a un componente padre */
  @Output() caracteristicasEmpleados= new EventEmitter<string>();

  /* Inyeccion de servicios */
  constructor(private miServicio:ServicioEmpleadoService){}

  /* Esta es la funcion para lanzar al padre info */
  agregarCaracteristicas(value:string){
    this.miServicio.muestraMensaje("La nueva caracteristica es "+value);
    this.caracteristicasEmpleados.emit(value); 
  }

}
