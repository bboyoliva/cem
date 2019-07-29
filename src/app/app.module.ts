import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { InicioPageComponent } from './componentes/inicio-page/inicio-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { PrivadoPageComponent } from './componentes/privado-page/privado-page.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';
import { RegistroPageComponent } from './componentes/registro-page/registro-page.component';
import { GestionCitasComponent } from './componentes/gestion-citas/gestion-citas.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';


import { environment } from '../environments/environment';
import { AuthService } from './servicios/auth.service';
import { GestionCitasService } from './servicios/gestion-citas.service';


import { AuthGuard } from './guards/auth.guard';
import { AngularFirestore } from '@angular/fire/firestore';



@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    InicioPageComponent,
    LoginPageComponent,
    PrivadoPageComponent,
    NotFoundPageComponent,
    RegistroPageComponent,
    GestionCitasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule
  ],
  providers: [AuthService, AuthGuard, FlashMessagesService, GestionCitasService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
