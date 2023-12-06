import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { UbicacionBDService } from '../services/ubicacion-bd.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  latitude: any = 0;
  longitude: any = 0;
  constructor(private geolocation: Geolocation, private ubicacionBD: UbicacionBDService) {}

  // Estandar de la W3C
  options = {
    timeout: 10000,
    enableHighAccuracy: true,
    maximumAge: 3600
  };

  getCurrentCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error al obtener la ubicacion xP', error);
    });
  }
  getURLMap() {
    const enlace = `https://maps.google.com/?q=${this.latitude},${this.longitude}`;
    window.open(enlace, '_system');
  }
  sendUbicacion() {
    this.ubicacionBD.addUbicacion(this.longitude, this.latitude).then(() => {
      console.log('Ubicacion enviada');
    }).catch((error) => {
      console.log('Latitud: ', this.latitude);
      console.log('Longitud: ', this.longitude);
      console.log('Error al enviar la ubicacion', error);
    });
  }
}
