import { Cita } from 'src/app/clases/cita.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GestionCitasService {

  constructor(private firestore: AngularFirestore ) { }

  getCitas() {
    return this.firestore.collection('usuarios').snapshotChanges();
  }

  updateCita(cita: Cita) {
    delete cita.id;
    this.firestore.doc('usuarios/' + cita.id).update(cita);
  }
  deleteCita(citaId: string) {
    this.firestore.doc('usuarios/' + citaId).delete();
  }

  createCita(policy: Cita) {
    return this.firestore.collection('usuarios').add(policy);
  }
}

