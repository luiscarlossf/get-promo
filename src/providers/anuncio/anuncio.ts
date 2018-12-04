import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anuncio } from '../../users/anuncio';

/*
  Generated class for the AnuncioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AnuncioProvider {
//http://localhost/anuncio/cadastrarAnuncio
  constructor(public http: HttpClient) {
    console.log('Hello AnuncioProvider Provider');
  }

  cadastrarAnuncio(anuncio: Anuncio){
  	this.http.post('http://192.168.0.7:8080/anuncio/cadastrarAnuncio', anuncio);
  }

}
