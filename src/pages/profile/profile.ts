import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { Categoria } from '../../users/categoria';
import { CategoriasProvider } from '../../providers/categorias/categorias';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  parent = null;
  email = null;
  nome = null;
  apelido = null;
  categorias = [];

  favoritas = "";
  fav1 = null;
  fav2 = null;
  fav3 = null;

  fav1_nome = "";

  disabledSelector: boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private categoriasPvdr: CategoriasProvider) {
    this.getCategorias();
    //setar parametros aqui
    this.fav1 = 1;
    this.fav2 = 2;
    this.fav3 = 3;

    this.apelido = 'teste';
    this.email = 'teste@';
    this.nome = 'teste';
    //////////////////////
    this.disabledSelector = true;

  //  this.favoritas = this.getFavoritas();

  }

  getCategorias(){
    this.categorias=[new Categoria(0,"-")];
    let categorias_array:any;
    this.categoriasPvdr.get().then((val)=>{
      categorias_array = val;
      for (let categoria of categorias_array) {
         this.categorias.push(new Categoria(categoria["id_categoria"], categoria["nome_categoria"]));
      }

    });
  }

  setData(apelido: string, email: string, nome: string, fav1: number, fav2: number, fav3: number){
    this.apelido = apelido;
    this.email = email;
    this.nome = nome;
    this.fav1 = fav1;
    this.fav2 = fav2;
    this.fav3 = fav3;
  }

  editarPerfil(){
    console.log(this.categorias);
    let data = {
      apelido: this.apelido,
      email: this.email,
      nome: this.nome,
      fav1: this.fav1,
      fav2: this.fav2,
      fav3: this.fav3
    };

    this.navCtrl.push(EditProfilePage, {
      parentPage: this,
      data: data
    });
  }
}
