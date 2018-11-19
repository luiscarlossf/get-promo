import { Usuario } from './Usuario';

export class Anunciante extends Usuario{
    categorias: number[];
    //adicionar anúncios depois

    constructor(nome: string, apelido: string, email: string, senha:string, interesses: number[], categorias: number[]) {
        super(nome,apelido,email, senha)
        this.categorias = categorias
    }

}
