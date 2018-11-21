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
  @ViewChild(NavController) nav: NavController;

  constructor(private http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }
  public login(email: string, senha: string){
    var data = {
        email: email,
        senha: senha
    };
    return new Promise((resolve, reject) => {
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        this.http.post("http://url:8000/usuario/login/", data)
          .subscribe(res => {
            resolve();
          }, (err) => {
            reject(err);
          });
    });
    // console.log(data);
  }
}
