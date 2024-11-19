export abstract class ItemBiblioteca {
    constructor(protected titulo: string, protected anoPublicacao: number) {}
  
    abstract exibirInformacoes(): void;
}