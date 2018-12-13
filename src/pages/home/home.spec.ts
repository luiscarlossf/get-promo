import { HomePage } from "./home";
import { NavController, NavParams} from 'ionic-angular';
import { NavControllerMock, NavParamsMock} from 'ionic-mocks';


describe('HomePage', () => {

let component: HomePage;
let navController: NavController;
let navParams: NavParams;

beforeEach(() => {
  navController = NavControllerMock.instance();
  var infoUser = {
          apelido: 'lui',
          nome: 'Luis',
          email: 'luis@gmail.com',
          permissao: 2,
          categoria1: 1,
          categoria2: 2,
          categoria3: 3
      };
  navParams = NavParamsMock.instance();
  navParams.data = infoUser;
  component = new HomePage(navController, navParams);
});

it('deveria ter um array não vazio', () => {
    component.initializeItems();
    expect(component.anuncios.length).toEqual(3);
  });

it('deveria ter usuario logado', () => {
    expect(component.user.apelido).toBe('lui');
  });

});