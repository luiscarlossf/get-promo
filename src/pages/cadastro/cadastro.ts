import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {

  constructor(public navCtrl: NavController) {

  }
  
  async cadastrar() {

    // Valida se foi informado nome, email, username e password
 //   if(user.email == "" || user.password == "" || user.nome == "" || user.username == "")
//    {  
//      this.alert('Erro', '� necess�rio informar todos os campos');
//    } else {
//      try {

        // Chama o m�todo para cadastrar usu�rio
//        const result = await this.auth.register(user);
//       if (result) {
          // Se ocorrer tudo bem redireciona para a p�gina initial
//          this.navCtrl.setRoot(InitialPage);
//        }
//      } catch (e) {
//        this.alert('Erro ao cadastrar', e.message);
//      }
 //   }
  }
}
