import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';
import { HttpClient } from '@angular/common/http';

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

  public remove(apelido: string, senha: string){
  	return this.dbProvider.getDB().then((db: SQLiteObject) => {
  	    let sql = 'delete from users where apelido = ? && senha = ?';
  	    let data = [apelido, senha];
  	    
  	    return db.executeSql(sql, data).catch((e) => console.error(e));
  	}).catch((e) => console.error(e));
  }

  public delete_user(apelido: string){
    console.log('Deletendo');

    this.http.delete("http://192.168.0.21:8080/usuario/deleteUsuario/"+apelido)
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
              let user = new Usuario(item.nome, item.apelido, item.email, item.senha);
              return user;
            }

            return null;
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }


}
