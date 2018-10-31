class Usuario {
    nome: string;
    apelido: string;
    email: string;
    interesses: number[];

    constructor(nome: string, apelido: string, email: string, interesses: number[]) {
        this.nome = nome;
        this.apelido = apelido;
        this.email = email;
        this.interesses = [1,2,3]
    }

}
