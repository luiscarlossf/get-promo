import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  anuncios: Array<any> = [
    {
      titulo:"Promocao de FastFood",
      descricao :"Venha aproveitar o melhor fastfood da cidade com promocao especial.",
      src: "assets/imgs/Fast-Food.jpg" 
    },
    {
      titulo:"Black Friday na PDG",
      descricao :"Aproveite a Black Friday para se livrar do aluguel e compre um imovel com descontos imperdiveis.",
      src: "assets/imgs/pdg.jpg" 
    },
    {
      titulo:"Carros 2015 e na SP Japan",
      descricao :"Precos imperdiveis e condicoes especiais para voce andar de carro novo.",
      src: "assets/imgs/carros.jpg" 
    }
  ]

  constructor(public navCtrl: NavController) {

  }

}
