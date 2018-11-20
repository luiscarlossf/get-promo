import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HomePage } from '../../pages/home/home';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';


/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  navParent: any;
  // @ViewChild(Nav) nav: Nav;

  constructor(private navCtrl: NavController, private http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }
  public login(email: string, senha: string){

    // navParent.push('DetailsTabPage');
    var data = {
        email: email,
        senha: senha
    };
    // console.log(data);
    this.http.post("http://url:8000/usuario/login/", data)
      .subscribe(data => {
        console.log(data);
       }, error => {
        var navParent = this.navCtrl.parent.parent as NavController;
        this.navParent.setRoot(HomePage);
        console.log(error);
      });
  }
}
