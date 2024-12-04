import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  constructor(private router:Router,private empleadosService:EmpleadosService) { }

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  empleados:Empleado[] = [];  

  
  nombreRegistro:string = "";
  apellidoRegistro:string = "";
  cargoRegistro:string = "";
  salarioRegistro:number = 0;

  registrarEmpleado(){
    let empleado = new Empleado(this.nombreRegistro,this.apellidoRegistro,this.cargoRegistro,this.salarioRegistro);
    this.empleadosService.agregarEmpleadoService(empleado)
    this.router.navigate(['contacto'])

  }

  volverHome(){
    this.router.navigate(['']);
  }
}
