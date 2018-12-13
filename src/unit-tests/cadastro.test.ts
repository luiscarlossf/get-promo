import 'reflect-metadata';
import { MockCadastroProvider } from '../mocks/mock.cadastro';
declare var cadastro:any;
/**
 * Block level variable for assigning the Mock CadastroProvider service to
 *
 */



/**
 * Re-create the MockCadastroProvider class object before each
 * unit test is run
 *
 */
beforeEach(() => {
   this.cadastro = new MockCadastroProvider();

});



/**
 * Group the unit tests for the MockCadastroProvider into one
 * test suite
 *
 */
 describe('Cadastro', () =>
{


   /**
    * Testa se cadastra com sucesso um usuário válido
    *
    */
    test('Cadastro Válido',async () =>
   {
      expect.assertions(1);
     let response = await this.cadastro.cadastrar("matheus", "matheus", "123", "maheus@test.com", 1);

      expect(response).toEqual("usuario matheus criado");
   });



   /**
    * Testa se proibe um cadastro com apelido já existente
    *
    */
    test('Cadastro apelido já existente', async () =>
   {
      expect.assertions(1);
      let response = await this.cadastro.cadastrar("matheus", "t", "12", "tst@tst.com", 1);
      
      expect(response).toEqual("apelido ja cadastrado");
   });



   /**
    * Testa se proibe cadastro com email já existente
    *
    */
   test('Cadastro email já existente', async () =>
   {
      expect.assertions(1);
      let response = await this.cadastro.cadastrar("tfds", "te", "1", "matheus@test.com", 1);
      
      expect(response).toEqual("email ja cadastrado");
   });



   /**
    * Testa dados incompletos
    *
    */
   test('Cadastro dados incompletos', async () =>
   {
    expect.assertions(1);
   	let response = await this.cadastro.cadastrar("", "", "1", "exemplo@exemplo.com", 1);
   	
   	expect(response).toEqual("Dados incompletos!");
   });




});


