import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-actualiza',
  templateUrl: './actualiza.component.html',
  styleUrls: ['./actualiza.component.css']
})
export class ActualizaComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private empleadosService: EmpleadosService) { }

  ngOnInit(): void {
    //Mediante el queryParams podemos recoger el parametro que viene por la url
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);

    this.empleados = this.empleadosService.empleados;

    //Con params podemos coger parametros de la url que previamente indicamos en el routing
    this.indice = this.route.snapshot.params['id']
    let empleado: Empleado = this.empleadosService.encontrarEmpleado(this.indice);


    this.nombreRegistro = empleado.nombre;
    this.apellidoRegistro = empleado.apellido;
    this.cargoRegistro = empleado.cargo;
    this.salarioRegistro = empleado.salario
  }

  nombreRegistro: string = "";
  apellidoRegistro: string = "";
  cargoRegistro: string = "";
  salarioRegistro: number = 0;
  empleados: Empleado[] = [];
  indice: number;
  accion: number;

  /* actualizarEmpleado(){
    let empleado = new Empleado(this.nombreRegistro,this.apellidoRegistro,this.cargoRegistro,this.salarioRegistro);
    this.empleadosService.actualizarEmpleado(empleado,this.indice)
    this.volverHome();

  }

  EliminarEmpleado(){
    this.empleadosService.eliminarEmpleado(this.indice);
    this.volverHome();
  }
 */

  //Funcion que dependiendo de un parametro borra o modifica
  actualizarEmpleado() {
    if (this.accion == 1) {

      let empleado = new Empleado(this.nombreRegistro, this.apellidoRegistro, this.cargoRegistro, this.salarioRegistro);
      this.empleadosService.actualizarEmpleado( empleado,this.indice);
      
      
      
      this.volverHome();
    } else {
      this.empleadosService.eliminarEmpleado(this.indice);
      this.volverHome();
      

    }


  }


  volverHome() {
    this.router.navigate(['']);
  }
}
