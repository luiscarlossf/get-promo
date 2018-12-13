import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MockUserProvider {
  constructor(){}

  async update_email(antigo: string, novo: string){
    let axios = require('axios');
    var data = {
        email_antigo: antigo,
        email_novo: novo
    };

    const req = await axios.put('http://localhost:8080/usuario/mudarEmail/',data);
    const res = await req.data;
    return res;

  }

  async update_nome(apelido: string, nome_novo: string){
    let axios = require('axios');
    var data = {
        apelido: apelido,
        nome_novo: nome_novo
    };
    const req = await axios.put('http://localhost:8080/usuario/mudarNome/',data);
    const res = await req.data;
    return res;

  }

  async update_categorias(apelido: string, fav1: number, fav2: number, fav3: number){
    let axios = require('axios');

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
    const req = await axios.put('http://localhost:8080/usuario/mudarCategorias/',data);
    const res = await req.data;
    return res;
  }

  async cadastrar(apelido : string, nome : string, senha : string, email : string, permissao : number){
    var axios = require('axios');
    const response = await  axios.post('http://localhost:8080/usuario/cadastrarUsuario', {
        apelido: apelido,
        nome: nome,
        senha: senha,
        email: email,
        foto: 'null',
        permissao: permissao
    });
    const res = await response.data;
    return res;
  }

  async getUsuario(apelido : string){
    var axios = require('axios');
    const response = await  axios.get('http://localhost:8080/usuario/getUsuario/' + apelido);
    const res = await response.data;
    return res;
  }
}
