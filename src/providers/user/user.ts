import { Injectable } from '@angular/core';
import { SQLite, SQLiteObjec } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';

import { Usuario } from '../../users/Usuario';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(private dbProvider: DatabaseProvider) {
    console.log('Hello UserProvider Provider');
  }

  public remove(apelido: string, senha: string){
  	return this.dbProvider.getDB().then((db: SQLiteObject) => {
  	    let sql = 'delete from users where apelido = ? && senha = ?';
  	    let data = [apelido, senha];
  	    
  	    return db.executeSql(sql, data).catch((e) => console.error(e));
  	}).catch((e) => console.error(e));
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
