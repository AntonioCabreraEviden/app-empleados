import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienSomosComponent } from './quienSomos/quienSomos.component';
import { ActualizaComponent } from './actualiza/actualiza.component';
import { ErrorPersonalizadoComponentComponent } from './errorPersonalizadoComponent/errorPersonalizadoComponent.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardian } from './login/loginGuardian';


/* Indicamos las rutas que seguir y el componente al que llevan, debemos tener en cuenta 2 cosas:
  En el html de app debemos poner el <router-outlet></router-outlet>
  Y a la hora de poner una ruta sera, por ejemplo, /contactanos */
const routes: Routes = [
  //La ruta '' es la por defecto donde se entra sin escribir nada
  {path:'',component:HomeComponent},
  {path:'proyectos',component:ProyectoComponent},
  {path:'contactanos',component:ContactoComponent,canActivate:[LoginGuardian]},
  {path:'quienes',component:QuienSomosComponent},
  //Con el :id indicamos que esta ruta recibira un parametro siempre
  {path:'actualiza/:id',component:ActualizaComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:ErrorPersonalizadoComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
