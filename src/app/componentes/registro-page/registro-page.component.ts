import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { timeout } from 'q';

@Component({
  selector: 'app-registro-page',
  templateUrl: './registro-page.component.html',
  styleUrls: ['./registro-page.component.scss']
})
export class RegistroPageComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.authService.registrarUsuario(this.email,this.password)
    .then( (res) =>{
      this.flashMessage.show('Usuario creado correctamente.',{cssClass: 'alert-success', timeout:4000});
      this.router.navigate(['/privado'])
    }).catch( (err) => {
      this.flashMessage.show(err.message,{cssClass: 'alert-danger', timeout:4000});
    });
  }

}
