import 'reflect-metadata';
import { MockLoginProvider } from '../mocks/mock.login';

declare var login:any;

beforeEach(() => {
   this.login = new MockLoginProvider();

});




 describe('login', () =>
{


    test('login Válido  ',async () =>
   {
      expect.assertions(1);
     let response = await this.login.login("victor@test.com", "123");

      expect(response['email']).toEqual("victor@test.com");
   });




    test('email Não existe', async () =>
   {
      expect.assertions(1);
      let response = await this.login.login("victor1@test.com", "123");

      expect(response).toEqual("email não cadastrado");
   });




   test('Senha incorreta', async () =>
   {
      expect.assertions(1);
      let response = await this.login.login("victor@test.com", "1233");

      expect(response).toEqual("senha incorreta");
   });


});
