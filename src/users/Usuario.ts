class Usuario {
    nome: string;
    apelido: string;
    email: string;
    interesses: number[];

    constructor(nome: string, apelido: string, email: string, senha: string) {
        this.nome = nome;
        this.apelido = apelido;
        this.email = email;
        this.senha = senha;
        this.interesses = [1,2,3]
    }

}
