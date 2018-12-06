import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../../users/categoria';
/*
  Generated class for the CategoriasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoriasProvider {

  categorias_array:any;

  constructor(public http: HttpClient) {
    console.log('Hello CategoriasProvider Provider');
  }

  get(){
  	return new Promise((resolve, reject)=>{
	  	this.http.get("http://localhost:8080/categoria/listarCategorias")
	  	.subscribe(
	  		(data: Array<Categorias>) => {
	  			resolve(data);
	  		},

	  		(error) => {
	           console.log(error);
	           reject(error);
	    });
   });

  }

  getCategorias(){
  	let categorias: Array<Categoria>=[new Categoria(-1, "Não possui categorias cadastradas")];
  	this.get().then((val)=>{
  		console.log(val);
  		this.categorias_array = val;
  		for (let categoria of this.categorias_array) {
    	categorias.push(new Categoria(categoria["id_categoria"], categoria["nome_categoria"]));
    	console.log(categoria); // 1, "string", false
		}
	    return categorias;
  	});
  }

}

export interface Categorias{
	id_categoria:number,
	nome_categoria:string
}
