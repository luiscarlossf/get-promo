class Anunciante extends Usuario{
    categorias: number[];
    //adicionar anúncios depois

    constructor(nome: string, apelido: string, email: string, interesses: number[], categorias: number[]) {
        super(nome,apelido,email,interesses)
        this.categorias = [1,2,3]
    }

}
