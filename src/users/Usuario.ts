export class Usuario {
    nome: string;
    apelido: string;
    email: string;
    senha: string;
    interesses: number[];

    constructor(nome: string, apelido: string, email: string, senha: string, categorias: number[]) {
        this.nome = nome;
        this.apelido = apelido;
        this.email = email;
        this.senha = senha;
        this.interesses = categorias;
    }

}
