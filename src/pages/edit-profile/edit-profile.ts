import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { Categoria } from '../../users/categoria';
import { CategoriasProvider } from '../../providers/categorias/categorias';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  data = null;
  categorias = [];
  apelido = null;
  email_antigo = null;
  email = null;
  nome = null;
  fav1 = 0;
  fav2 = 0;
  fav3 = 0;
  parent = null;

  nome_inputChange = 0;
  email_inputChange = 0;
  fav1_change = 0;
  fav2_change = 0;
  fav3_change = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private categoriasPvdr: CategoriasProvider, private userPvdr: UserProvider, public toastCtrl: ToastController, public alertCtrl: AlertController) {
    this.getCategorias();
    this.parent = navParams.get('parentPage');
    this.apelido = navParams.get('data').apelido;
    this.email = navParams.get('data').email;
    this.email_antigo = this.email;
    this.nome = navParams.get('data').nome;
    this.fav1 = navParams.get('data').fav1;
    this.fav2 = navParams.get('data').fav2;
    this.fav3 = navParams.get('data').fav3;

    for (var i = 0; i < this.categorias.length; i++) {
      if(this.categorias[i].id == this.fav1){
        this.fav1 = i;
      } else if(this.categorias[i].id == this.fav2){
        this.fav2 = i;
      } else if(this.categorias[i].id == this.fav3){
        this.fav3 = i;
      }
    }

  }

  salvarDados(){
    var success1;
    success1 = 1;
    if(this.email_inputChange == 1){
      success1 = this.userPvdr.update_email(this.email_antigo,this.email).then ((result) => {
        var message = result.toString().trim();

        if(message === 'email ja cadastrado' || message === "Dados incompletos!"){
          console.log(message);
          this.presentToast(message);
          return 0;
        }else{
          return 1;
        }
      });
    }

    if(success1 == 1){
      this.email_inputChange == 0;
      this.email_antigo = this.email;
      if(this.nome_inputChange == 1){
         this.userPvdr.update_nome(this.apelido,this.nome).then((result) => {
          var message = result.toString().trim();
          if(message !== 'nome modificado com sucesso!'){
            console.log(message);
          }
        });
      }

      this.nome_inputChange == 0;
      if(this.fav1_change == 1 || this.fav2_change == 1 || this.fav3_change == 1 ){
        this.userPvdr.update_categorias(this.apelido,this.fav1,this.fav2,this.fav3).then((result) => {
          var message = result;
          console.log(message);
          this.presentSaveAlert();
        });
      }


    }
    this.parent.setData(this.email,this.nome,this.fav1,this.fav2,this.fav3);
    this.navCtrl.pop();
  }

  presentSaveAlert() {
    let alert = this.alertCtrl.create({
      title: 'Dados salvos',
      subTitle: 'Os dados modificados foram salvos.',
      buttons: ['Ok']
    });
    alert.present();
  }


  onEmailChange(){this.email_inputChange = 1; }
  onNomeChange(){this.nome_inputChange = 1; }
  onfav1Change(){this.fav1_change = 1; }
  onfav2Change(){this.fav2_change = 1; }
  onfav3Change(){this.fav3_change = 1; }

  //Recupera as categorias do banco e coloca na lista que será exibida no checkbox
  getCategorias(){
    this.categorias=[new Categoria(0,"-")];
    let categorias_array:any;
    this.categoriasPvdr.get().then((val)=>{
      //console.log(val);
      categorias_array = val;
      for (let categoria of categorias_array) {
         this.categorias.push(new Categoria(categoria["id_categoria"], categoria["nome_categoria"]));
         //console.log(categoria); // 1, "string", false
      }
    });
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
    });

    toast.present();

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

}
