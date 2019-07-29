import { Component, OnInit } from '@angular/core';
import { GestionCitasService } from 'src/app/servicios/gestion-citas.service';
import { Cita } from 'src/app/clases/cita.model';


@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.component.html',
  styleUrls: ['./gestion-citas.component.scss']
})
export class GestionCitasComponent implements OnInit {
  citas: Cita[];
  constructor(private citasService: GestionCitasService) { }

  ngOnInit() {
    this.citasService.getCitas().subscribe(data => {
      this.citas = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Cita;
      });
    });
  }

  actualizarCita(cita: Cita) {
    this.citasService.updateCita(cita);
  }

  borrarCita(id: string) {
    this.citasService.deleteCita(id);
  }


}
