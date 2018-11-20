import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }
  public login(email: string, senha: string){
    var data = {
        email: email,
        senha: senha
    };
    this.http.post("http://192.168.0.21:8080/usuario/login/",data)
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }
}
