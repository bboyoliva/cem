import { Cita } from 'src/app/clases/cita.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GestionCitasService {

  constructor(private firestone: AngularFirestore ) { }

  getCitas() {
    return this.firestone.collection('usuarios').snapshotChanges();
  }

}

