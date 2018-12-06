import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CadinteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CadinteProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CadinteProvider Provider');
  }
  public cadInteresse(interesse: string){
    var data = {
        nome_categoria: interesse
    };
    return new Promise((resolve, reject) => {
        this.http.post("http://localhost:8080/categoria/cadastrarCategoria", data)
          .subscribe((res: any) => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }
}
