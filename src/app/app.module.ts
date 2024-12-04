import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpleadoService } from './servicio-empleado.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { QuienSomosComponent } from './quienSomos/quienSomos.component';
import { ActualizaComponent } from './actualiza/actualiza.component';
import { ErrorPersonalizadoComponentComponent } from './errorPersonalizadoComponent/errorPersonalizadoComponent.component';
import { DataService } from './data.service';
import { provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import {CookieService} from 'ngx-cookie-service';
import { LoginGuardian } from './login/loginGuardian';




@NgModule({
  declarations: [					
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoCComponent,
    HomeComponent,
    ContactoComponent,
    ProyectoComponent,
    QuienSomosComponent,
      ActualizaComponent,
      ErrorPersonalizadoComponentComponent,
      LoginComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [
    ServicioEmpleadoService,
    EmpleadosService,DataService,
    provideHttpClient(),
    LoginService,
    CookieService,
    LoginGuardian
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
