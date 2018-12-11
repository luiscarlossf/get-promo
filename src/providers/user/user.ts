import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../../users/Usuario';


/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {


  constructor(private dbProvider: DatabaseProvider, private http: HttpClient) {
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
        this.http.post("http://localhost:8080/usuario/login/", data)
          .subscribe((res: any) => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
    // console.log(data);
  }

  public remove(apelido: string, senha: string){
  	return this.dbProvider.getDB().then((db: SQLiteObject) => {
  	    let sql = 'delete from users where apelido = ? && senha = ?';
  	    let data = [apelido, senha];

  	    return db.executeSql(sql, data).catch((e) => console.error(e));
  	}).catch((e) => console.error(e));
  }

  public delete_user(apelido: string){
    console.log('Deletendo');
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), 
      body: {apelido:apelido},
      params: {apelido:apelido}
    };

    this.http.delete("http://localhost:8080/usuario/deleteUsuario/", options)
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }

  public get(apelido: string) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'select * from users where apelido = ?';
        let data = [apelido];

        return db.executeSql(sql, data)
          .then((data: any) => {
            if (data.rows.length > 0) {
              let item = data.rows.item(0);
              let user = new Usuario(item.nome, item.apelido, item.email, item.senha,[item.categoria_favorita1,item.categoria_favorita2,item.categoria_favorita3]);
              return user;
            }

            return null;
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public update_email(antigo: string, novo: string){
    console.log('Update email');
    var data = {
        email_antigo: antigo,
        email_novo: novo
    };
    return new Promise((resolve, reject) => {
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        this.http.put("http://localhost:8080/usuario/mudarEmail/", data)
          .subscribe((res: any) => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
    // console.log(data);
  }

  public update_nome(apelido: string, nome_novo: string){
    console.log('Update nome');
    var data = {
        apelido: apelido,
        nome_novo: nome_novo
    };
    return new Promise((resolve, reject) => {
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        this.http.put("http://localhost:8080/usuario/mudarNome/", data)
          .subscribe((res: any) => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
    // console.log(data);
  }

  public update_categorias(apelido: string, fav1: number, fav2: number, fav3: number){
    console.log('Update categorias');

    if(fav1 == 0){
      fav1 = null;
    }
    if(fav2 == 0){
      fav2 = null;
    }
    if(fav3 == 0){
      fav3 = null;
    }

    var data = {
        apelido: apelido,
        categoria_favorita1: fav1,
        categoria_favorita2: fav2,
        categoria_favorita3: fav3
    };
    return new Promise((resolve, reject) => {
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        this.http.put("http://localhost:8080/usuario/mudarCategorias/", data)
          .subscribe((res: any) => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
    // console.log(data);
  }


}
