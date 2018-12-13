import {AlertController} from 'ionic-angular';
import {AlertControllerMock} from 'ionic-mocks';
import { ConfigPage } from './config';
import { UserProvider } from '../../providers/user/user';
import { NavController, NavParams} from 'ionic-angular';
import { NavControllerMock, NavParamsMock} from 'ionic-mocks';

describe('ConfigPage', () => {

    let alertCtrl: AlertController;
    let component: ConfigPage;
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
        alertCtrl = AlertControllerMock.instance();
        component = new ConfigPage(navController, navParams, alertCtrl, null);
    });

    it('should call alert create', () => {

        component.presentConfirm();

        expect(alertCtrl.create).toHaveBeenCalled();
    });
});