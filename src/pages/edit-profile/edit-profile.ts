import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  items = [];
  apelido = null;
  email = null;
  nome = null;
  categ1 = null;
  categ2 = null;
  categ3 = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.apelido = navParams.get('apelido');
    this.email = navParams.get('email');
    this.nome = navParams.get('nome');
    this.categ1 = navParams.get('categ1');
    this.categ2 = navParams.get('categ2');
    this.categ3 = navParams.get('categ3');

    console.log(this.nome);
    this.createArray();
  }

  createArray(){
    for (let i = 0; i < 5; i++) {
      let checked: boolean = false;
      this.items.push({ name: 'categoria ' + (i + 1), ischecked: checked });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

}
