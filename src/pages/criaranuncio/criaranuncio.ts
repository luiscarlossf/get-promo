import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap,GoogleMapOptions, Environment, Marker, GoogleMapsEvent, MarkerOptions, LatLng} from '@ionic-native/google-maps';

/**
 * Generated class for the CriaranuncioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-criaranuncio',
  templateUrl: 'criaranuncio.html',
})
export class CriarAnuncioPage {
  @ViewChild('map') mapElement: ElementRef;
	map:GoogleMap;
	categorias: Array<{title:string, component: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, private _googleMaps: GoogleMaps) {
  	this.categorias = [{title:"Entretenimento", component: "Entretenimento"}, 
  	                   {title:"Lazer", component: "Lazer"},
  	                   {title:"Educação", component: "Educação"}];

  }

  ionViewDidLoad() {
     this.loadMap();
  }

  initMap(){
    let element = this.mapElement.nativeElement;
    this.map = this._googleMaps.create(element)
  }

  loadMap() {

    // This code is necessary for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBU05nmlqzUX06FZj1dv-C2aGhtynWqQ9k',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBU05nmlqzUX06FZj1dv-C2aGhtynWqQ9k'
    });

    let location: LatLng;

    this.geolocation.getCurrentPosition()
      .then((resp) => {
        location = new LatLng(resp.coords.latitude, resp.coords.longitude);
      }).catch((error) => {
        console.log('Erro ao recuperar sua posição', error);
      });

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: location,
         zoom: 18,
         tilt: 30
       }
    };

    let element = this.mapElement.nativeElement;
    this.map = GoogleMaps.create(element, mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position:location
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });

    this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe(this.onMapClick.bind(this));
  }

  createMarker(loc:LatLng, title:string){
    let markerOPtions: MarkerOptions = {
      position: loc,
      title: title
    };
  }

  

  onMapClick(params: any[]) {
    let latLng: LatLng = params[0];

    this.map.addMarkerSync({
      position: latLng
    });
}

}
