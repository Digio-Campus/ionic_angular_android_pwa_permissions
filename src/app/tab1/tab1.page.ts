import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { GeolocationService } from '../services/geolocation.service';


declare var cordova: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButton],
})

export class Tab1Page {
  resultMessage: string;
  permissions: any;

  constructor(private geolocationService: GeolocationService) {
    this.resultMessage = '';
    //this.permissions = cordova.plugins.permissions;  //Para que arranque bien el PWA, debes deshabilitar esta inicialización. 
  }


  getLocation() {
    this.geolocationService.getCurrentPosition()
      .then(position => {
        console.log('Latitude: ' + position.coords.latitude);
        console.log('Longitude: ' + position.coords.longitude);
      })
      .catch(error => {
        console.error('Error getting location', error);
      });
  }

  permissionFunc() {
    this.permissions.requestPermission(this.permissions.ACCESS_COARSE_LOCATION, success, error);
    function error() {
      console.warn('Camera permission is not turned on');
    }

    function success(status: any) {
      if (!status.hasPermission) error();
    }
  }
}