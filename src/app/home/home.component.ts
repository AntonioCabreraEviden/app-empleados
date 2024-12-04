import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  titulo = 'Listado de empleados';

  /* Inyecciones  de servicio en el componenete principal para poder usarlo, asegurarse 
  de que esta importado en el app.module */
  constructor(private empleadosService:EmpleadosService){

    // this.empleados = this.empleadosService.empleados;
  }

  ngOnInit(): void {
    //Carga de la base de datos en la lista del home
    /* Debemos hacer un subscribre para poder usarlo ya que es un observable */
     this.empleadosService.obtenerEmpleados().subscribe(misEmpleados =>{
      //Como lo que te devuelve es un objeto tienes que hacerlo asi para poder tomar sus valores
      this.empleados = Object.values(misEmpleados);
      console.log('La lista de empleados del home en el OnInit : ');      
      console.log(this.empleados);      
      this.empleadosService.setEmpleados(this.empleados);
    });    
  }

  empleados:Empleado[] = [];
 
  nombreRegistro:string = "";
  apellidoRegistro:string = "";
  cargoRegistro:string = "";
  salarioRegistro:number = 0;

  registrarEmpleado(){
    let empleado = new Empleado(this.nombreRegistro,this.apellidoRegistro,this.cargoRegistro,this.salarioRegistro);
    this.empleadosService.agregarEmpleadoService(empleado);   

  }

}
