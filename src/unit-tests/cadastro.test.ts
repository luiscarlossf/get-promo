import 'reflect-metadata';
import { MockCadastroProvider } from '../mocks/mock.cadastro';
declare var cadastro:any;

beforeEach(() => {
   this.cadastro = new MockCadastroProvider();

});




 describe('Cadastro', () =>
{



    test('Cadastro V�lido',async () =>
   {
      expect.assertions(1);
     let response = await this.cadastro.cadastrar("matheus", "matheus", "123", "maheus@test.com", 1);

      expect(response).toEqual({"message": "usuario matheus criado"});
   });




    test('Cadastro apelido j� existente', async () =>
   {
      expect.assertions(1);
      let response = await this.cadastro.cadastrar("matheus", "t", "12", "tst@tst.com", 1);

      expect(response).toEqual("apelido já cadastrado");
   });



   test('Cadastro dados incompletos', async () =>
   {
    expect.assertions(1);
   	let response = await this.cadastro.cadastrar("", "", "1", "exemplo@exemplo.com", 1);

   	expect(response).toEqual("Dados incompletos!");
   });




});
