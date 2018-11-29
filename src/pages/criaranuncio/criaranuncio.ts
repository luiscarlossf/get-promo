import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController  } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap,GoogleMapOptions, Environment, Marker, GoogleMapsEvent, MarkerOptions, LatLng} from '@ionic-native/google-maps';
import { CategoriasProvider } from '../../providers/categorias/categorias';
import { AnuncioProvider } from '../../providers/anuncio/anuncio';
import { Categoria } from '../../users/categoria';
import { Anuncio } from '../../users/anuncio';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FileChooser } from '@ionic-native/file-chooser';

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
	categorias: Array<Categoria>;
  anuncio: Anuncio;
  imageURI: any;
  imageFileName: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private geolocation: Geolocation, private _googleMaps: GoogleMaps, 
              private categoriasPvdr: CategoriasProvider, private anuncioProvider:AnuncioProvider,
              private transfer: FileTransfer,
             public loadingCtrl: LoadingController,
             public toastCtrl: ToastController,
             public fileChooser: FileChooser) {
    this.getCategorias();
    this.anuncio = new Anuncio();
  }

  ionViewDidLoad() {
     this.loadMap();
     console.log(this.categorias);
  }

  upload(){
    this.fileChooser.open()
       .then(uri => this.imageURI = uri)
       .catch(e => console.log(e));
  }

  uploadImage(){
    let loader = this.loadingCtrl.create({
      content: "Gerando anúncio..." 
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    }

    fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
      .then((data) => {
      console.log(data+" Uploaded Successfully");
      this.imageFileName = "";
      loader.dismiss();
      this.presentToast("Image uploaded successfully");
    }, (err) => {
      console.log(err);
      loader.dismiss();
      this.presentToast(err);
    });
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  initMap(){
    let element = this.mapElement.nativeElement;
    this.map = this._googleMaps.create(element)
  }

  onSubmit(){
    console.log("Envio anuncio-form!");
    console.log(this.anuncio);
    console.log(this.imageURI);
    //this.anuncioProvider.cadastrarAnuncio(this.anuncio);
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

  getCategorias(){
    this.categorias=[];
    let categorias_array:any;
    this.categoriasPvdr.get().then((val)=>{
      console.log(val);
      categorias_array = val;
      for (let categoria of categorias_array) {
         this.categorias.push(new Categoria(categoria["id_categoria"], categoria["nome_categoria"]));
         console.log(categoria); // 1, "string", false
      }
    });
  }
  

  onMapClick(params: any[]) {
    let latLng: LatLng = params[0];

    this.map.addMarkerSync({
      position: latLng
    });
  }

}
