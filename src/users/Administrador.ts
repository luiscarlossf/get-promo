import { Anunciante } from './Anunciante';

export class Administrador extends Anunciante{

    constructor(nome: string, apelido: string, email: string, senha: string, interesses: number[], categorias: number[]) {
        super(nome,apelido,email, senha, interesses,categorias)
    }

}
