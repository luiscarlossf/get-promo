import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CriarAnuncioPage } from '../criaranuncio/criaranuncio';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: { apelido: any,
          nome: any,
          email: any,
          permissao: any,
          categoria1: any,
          categoria2: any,
          categoria3: any
        };

  anuncios = [
    {
      titulo:"Promocao de FastFood",
      descricao :"Venha aproveitar o melhor fastfood da cidade com promocao especial.",
      src: "assets/imgs/Fast-Food.jpg",
      categoria: "alimentos"
    },
    {
      titulo:"Black Friday na PDG",
      descricao :"Aproveite a Black Friday para se livrar do aluguel e compre um imovel com descontos imperdiveis.",
      src: "assets/imgs/pdg.jpg",
      categoria: "imoveis"
    },
    {
      titulo:"Carros 2015 e na SP Japan",
      descricao :"Precos imperdiveis e condicoes especiais para voce andar de carro novo.",
      src: "assets/imgs/carros.jpg",
      categoria: "carros"
    }
  ]

  estabelecimentos = [{
  nome: 'Estabelecimento1',
  lat:-5.083974,
  lng:-42.787884
  },{
  nome: 'Estabelecimento2',
  lat:-5.059952,
  lng:-42.797722
  }]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navParams.get('infoUser');
    this.user = this.navParams.data;
  }


  initializeItems() {
  this.anuncios = [
      {
      titulo:"Promocao de FastFood",
      descricao :"Venha aproveitar o melhor fastfood da cidade com promocao especial.",
      src: "assets/imgs/Fast-Food.jpg",
      categoria: "alimentos"
    },
    {
      titulo:"Black Friday na PDG",
      descricao :"Aproveite a Black Friday para se livrar do aluguel e compre um imovel com descontos imperdiveis.",
      src: "assets/imgs/pdg.jpg",
      categoria: "imoveis"
    },
    {
      titulo:"Carros 2015 e na SP Japan",
      descricao :"Precos imperdiveis e condicoes especiais para voce andar de carro novo.",
      src: "assets/imgs/carros.jpg",
      categoria: "carros"
    }
  ];
}

getItems(ev : any) {
  // Reset items back to all of the items
  this.initializeItems();
  // set q to the value of the searchbar
  var q = ev.target.value;;
  // if the value is an empty string don't filter the items
  if (q && q.trim() != '') {

   this.anuncios = this.anuncios.filter((v) => {

    if (v.categoria.toLowerCase().indexOf(q.toLowerCase()) > -1 || v.titulo.toLowerCase().indexOf(q.toLowerCase()) > -1) {
       return true;
      }

      return false;
    })
  }
 }


  openCard(item){

   this.anuncios = this.anuncios.filter((v) => {

    if (v.categoria.toLowerCase().indexOf(q.toLowerCase()) > -1 || v.titulo.toLowerCase().indexOf(q.toLowerCase()) > -1) {
       return true;
      }

      return false;
    })
  }
  
  cadastrarAnuncio(){
    this.navCtrl.push(CriarAnuncioPage, this.user);
  }


}
