import 'reflect-metadata';
import { MockUserProvider } from '../mocks/mock.user';
import * as Faker from 'faker';

declare var user:any;
declare var nome:any;
declare var apelido:any;
declare var email:any;
declare var senha:any;

/**
 * Block level variable for assigning the Mock CadastroProvider service to
 *
 */

 this.nome = Faker.name.findName();
 this.email = Faker.internet.email();
 this.user = new MockUserProvider();
 this.apelido = Faker.internet.userName();
 this.senha = 'teste';

 console.log('Inicio dos Testes'+ '\n' +
 'Apelido = ' + this.apelido + '\n' +
 'Nome = ' + this.nome + '\n' +
 'Email = ' + this.email);

/**
 * Re-create the MockCadastroProvider class object before each
 * unit test is run
 *
 */
beforeEach(() => {
});

/**
 * Group the unit tests for the MockCadastroProvider into one
 * test suite
 *
 */

 describe('Mudar Perfil', () =>
{


   //Cadastra um usuário
    test('Cadastro',async () =>
   {
     let response = await this.user.cadastrar(this.apelido, this.nome, this.senha, this.email, 1);

      expect(response['message']).toEqual("usuario " + this.apelido + " criado");
   });


    test('Mudar Nome', async () =>
   {

      let response = await this.user.update_nome(this.apelido,Faker.name.findName());

      expect(response['message']).toEqual("nome modificado com sucesso!");
   });


   test('Mudar categorias', async () =>
   {

      let response = await this.user.update_categorias(this.apelido,1,2,3);

      expect(response['message']).toEqual('categorias do usuario ' + this.apelido + ' atualizadas.');
   });


   test('Mudar email (SUCESSO)', async () =>
   {
    let email_novo = Faker.internet.email();
   	let response = await this.user.update_email(this.email,email_novo);

   	expect(response['message']).toEqual('usuario com email ' + this.email +
      ' mudou seu email para ' + email_novo);
   });

   test('Mudar email (FALHA)', async () =>
   {
    let email_novo = 'teste';
   	let response = await this.user.update_email(this.email,email_novo);

   	expect(response).toEqual('email ja cadastrado');

    let user_updated = await this.user.getUsuario(this.apelido);
    console.log('Fim dos Testes'+ '\n' +
    'Apelido = ' + user_updated['apelido'] + '\n' +
    'Nome = ' + user_updated['nome'] + '\n' +
    'Email = ' + user_updated['email']);
   });
});
