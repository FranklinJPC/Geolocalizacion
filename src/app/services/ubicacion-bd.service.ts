import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
export interface Ubicacion {
  createdAt: firebase.firestore.FieldValue;
  latitud: any;
  longitud: any;
}


@Injectable({
  providedIn: 'root'
})
export class UbicacionBDService {

  constructor(private afs: AngularFirestore) { }

  addUbicacion(longitud: any, latitud: any) {
    return this.afs.collection('ubicaciones').add({
      latitud: latitud,
      longitud: longitud,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }
}
