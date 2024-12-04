import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadoService } from './servicio-empleado.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  empleados: Empleado[] = [];

  setEmpleados(misEmpleados: Empleado[]) {
    this.empleados = misEmpleados;
    console.log('Ha ocurrido un set en el service');
    console.log(this.empleados);
    


  }

  obtenerEmpleados() {
    //Esto devuelve los empleados desde base de datos
    return this.dataServices.cargarEmpleados();
  }

  agregarEmpleadoService(empleado: Empleado) {

    this.servicioVentana.muestraMensaje("Persona que se va agregar: " + empleado.nombre);
    this.empleados.push(empleado);
    //Agrega la lista de empleados a la base de datos
    this.dataServices.guardarEmpleados(this.empleados)

  }

  encontrarEmpleado(indice: number) {
    let empleado: Empleado = this.empleados[indice];
    return empleado;
  }

  //Funcion para actualizar empleado
  actualizarEmpleado(empleado: Empleado, indice: number) {
    

    //Creamos un objeto que apunte al empleado que queremos modificar
    let empleadoModificado: Empleado = this.empleados[indice];

    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;

    console.log('Actualizando...');
    this.dataServices.actualizarEmpleado(indice, empleado);
    

    console.log('La lista de empleados del service justo despues de actualizar es : ');
    console.log(this.empleados);



  }
  //funcion para eliminar empleado
  eliminarEmpleado(indice: number) {
    this.empleados.splice(indice, 1);

    this.dataServices.eliminarEmpleado(indice);
    console.log('La lista de empleado justo despues de eliminar el empleado ' + indice + ' es');
    console.log(this.empleados);

    
  }



  constructor(private servicioVentana: ServicioEmpleadoService, private dataServices: DataService) { }

}
