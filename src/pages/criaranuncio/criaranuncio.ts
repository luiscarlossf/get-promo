import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, normalizeURL} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap,GoogleMapOptions, Environment, Marker, GoogleMapsEvent, MarkerOptions, LatLng} from '@ionic-native/google-maps';
import { CategoriasProvider } from '../../providers/categorias/categorias';
import { AnuncioProvider } from '../../providers/anuncio/anuncio';
import { Categoria } from '../../users/categoria';
import { Anuncio } from '../../users/anuncio';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FileChooser } from '@ionic-native/file-chooser';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HomePage } from '../home/home';


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
  user: any;
	map:GoogleMap;
	categorias: Array<any>;
  anuncio: Anuncio;
  photo: any;
  pathimage: any;
  imageFileName: any;
  loader:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private geolocation: Geolocation, private _googleMaps: GoogleMaps, 
              private categoriasPvdr: CategoriasProvider, private anuncioProvider:AnuncioProvider,
              private transfer: FileTransfer,
             public loadingCtrl: LoadingController,
             public toastCtrl: ToastController,
             public fileChooser: FileChooser,
             private camera: Camera) {
    this.getCategorias();
    this.navParams.get('this.user');
    this.user = this.navParams.data;
    this.anuncio = new Anuncio();
  }

  ionViewDidLoad() {
     this.loadMap();
     console.log(this.categorias);
  }


  //Carrega a imagem selecionada no form
  getImage(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false
    }
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.photo = 'data:image/jpeg;base64,' + imageData;
     this.pathimage = imageData;
    }, (err) => {
     // Handle error
    });
  }

  //Submete o formulário de cadastro para o servidor.
  onSubmit(){
    this.loader = this.loadingCtrl.create({
      content: "Gerando anúncio..." 
    });
    this.loader.present();
    this.anuncio.apelido_anunciante = this.user.apelido;
    this.uploadImage();
    this.anuncioProvider.cadastrarAnuncio(this.anuncio, this.loader);
    this.navCtrl.setRoot(HomePage);
  }
  
  //Faz o upload da imagem para o servidor
  uploadImage(){
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'image',
      fileName: this.anuncio.titulo+'.jpeg',
      chunkedMode: false,
      mimeType: 'multipart/form-data',
      httpMethod: 'POST',
      params: {'tipo': 'anuncio', 'apelido': 'luis'} 
    };

    fileTransfer.upload(this.pathimage, encodeURI('http://localhost:8080/uploads/realizarUpload'), options)
      .then(response => {
      console.log(" Uploaded Successfully");
      this.imageFileName = "";
      this.presentToast("Image uploaded successfully");
    }, err => {
      console.log("Erro na trasnferências");
      console.log(err);
      this.loader.dismiss();
      this.presentToast(err);
    });
  }
  
  //Pequeno pop up de mensagens
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 10000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  
  //Carrega o mapa no formulário.
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
        console.log("Localização atual: ", location);
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

    this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe(this.onMapClick.bind(this));
  }

  //Recupera as categorias do banco e coloca na lista que será exibida no checkbox
  getCategorias(){
    this.categorias=[];
    let categorias_array:any;
    this.categoriasPvdr.get().then((val)=>{
      console.log(val);
      categorias_array = val;
      for (let categoria of categorias_array) {
         this.categorias.push({id: categoria["id_categoria"], nome: categoria["nome_categoria"]});
         console.log(categoria); // 1, "string", false
      }
    });
  }
  
  // Instruções são executadas quando o mapa é clicado.
  onMapClick(params: any[]) {
    let latLng: LatLng = params[0];
    
    this.anuncio.latitude = latLng.lat.toString();
    this.anuncio.longitude = latLng.lng.toString();
    let marker: Marker = this.map.addMarkerSync({
      icon: 'blue',
      animation: 'DROP',
      position: latLng
    });

    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      marker.remove();
    });

  }

}
