import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-page',
  templateUrl: './inicio-page.component.html',
  styleUrls: ['./inicio-page.component.scss']
})
export class InicioPageComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public router: Router
  ) {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.router.navigate(['/privado']);
      }
    });
  }

  ngOnInit() {}

}
