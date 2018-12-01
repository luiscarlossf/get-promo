import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  apelido: any;
  nome: any;
  email: any;
  permissao: any;
  categoria1: any;
  categoria2: any;
  categoria3: any;

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
    this.apelido = navParams.get('apelido');
    this.nome = navParams.get('nome');
    this.email = navParams.get('email');
    this.permissao = navParams.get('permissao');
    this.categoria1 = navParams.get('categoria1');
    this.categoria2 = navParams.get('categoria2');
    this.categoria3 = navParams.get('categoria3');
  }

  ionViewWillEnter() {
      if (this.permisao == 1) {
        this.pages = [
          { title: 'Admin Dashboard', page: 'AdminPage', icon: 'home' },
          { title: 'Admin Second Page', page: 'AdminSecondPage', icon: 'planet' }
        ];

      }if (this.permisao == 2)  {
        this.pages = [
          { title: 'User Dashboard', page: 'UserPage', icon: 'home' },
          { title: 'User Second Page', page: 'UserSecondPage', icon: 'planet' }
        ];

      }

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

  }


}
