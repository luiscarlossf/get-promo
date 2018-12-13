import { Injectable } from '@angular/core';
declare var require:any;


@Injectable()
export class MockCadastroProvider
{
   constructor() {}

   async cadastrar(apelido : string, nome : string, senha : string, email : string, permissao : number)
   {
        var axios = require('axios');
        console.log('in');
        const response = await  axios.post('http://localhost:8080/usuario/cadastrarUsuario', {
                                  apelido: apelido,
                                  nome: nome,
                                  senha: senha,
                                  email: email,
                                  foto: 'null',
                                  permissao: permissao
                                });
        const res = await response.data;
        console.log(res);
        return res;

   }
}
