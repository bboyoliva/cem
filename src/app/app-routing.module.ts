import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadedRouterConfig } from '@angular/router/src/config';
import {InicioPageComponent} from './componentes/inicio-page/inicio-page.component';
import {LoginPageComponent} from './componentes/login-page/login-page.component';
import {RegistroPageComponent} from './componentes/registro-page/registro-page.component';
import {PrivadoPageComponent} from './componentes/privado-page/privado-page.component';
import {NotFoundPageComponent} from './componentes/not-found-page/not-found-page.component';
import { GestionCitasComponent } from './componentes/gestion-citas/gestion-citas.component';

import {AuthGuard} from './guards/auth.guard';


const routes: Routes = [
  {path: '', component: InicioPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'registro', component: RegistroPageComponent},
  {path: 'privado', component: PrivadoPageComponent, canActivate: [AuthGuard]},
  {path: 'gestion-citas', component: GestionCitasComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
