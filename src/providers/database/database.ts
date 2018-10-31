import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite) {
    console.log('Hello DatabaseProvider Provider');
  }

  public getDB(){
     return this.sqlite.create({
        name: 'getpromo.db',
        location: 'default'
     });
  }

  public createDatabase(){
      return this.getDB().then((db:SQLiteObject) => {

          this.createTables(db);

          this.insertDefaultItems(db);
      }).catch( e => console.log(e));
  }

  private createTables(db: SQLiteObject){
     db.sqlBatch([['CREATE TABLE IF NOT EXISTS users (id integer primary key \
     	            AUTOINCREMENT NOT NULL, name TEXT, apelido TEXT, email TEXT, senha TEXT)']
     	]).then(() => console.log('Tabelas criadas')).catch(e => console.error('Erro ao criar as tabelas', e));
  }

  private insertDefaultItems(db: SQLiteObject) {
    db.executeSql('select COUNT(id) as qtd from categories', {})
    .then((data: any) => {
      //Se não existe nenhum registro
      if (data.rows.item(0).qtd == 0) {

        // Criando as tabelas
        db.sqlBatch([
          ['insert into users (name, apelido, email, senha) values (?,?,?,?)', ['Luis', 'lui', 'lui@ufpi.br', '2018ufpi']]
        ])
          .then(() => console.log('Dados padrões incluídos'))
          .catch(e => console.error('Erro ao incluir dados padrões', e));

      }
    }).catch(e => console.error('Erro ao consultar a qtd de categorias', e));
  }

}
