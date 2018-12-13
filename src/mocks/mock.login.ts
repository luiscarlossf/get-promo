import { Injectable } from '@angular/core';
declare var require:any;


@Injectable()
export class MockLoginProvider
{
   constructor() {}

   async login(email : string, senha : string)
   {
     var axios = require('axios');
     const response = await  axios.post('http://localhost:8080/usuario/login/', {
                               email: email,
                               senha: senha,
                             });
     const res = await response.data;
     console.log(res);
     return res;
   }

}
