class Animal {
    protected nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    emitirSom(): void {
        console.log("Som do animal.");
    }
    
    public mover(distancia: number): void {
		    console.log(`${this.nome} se moveu ${distancia} metros.`);
	}
}

class Cachorro extends Animal {
    constructor(nome : string) {
        super(nome);
    }
    emitirSom(): void {
        console.log("au au au au");
    }
    pegar(): void {
        console.log("vá pegar!!!!");
    }
}

let animal = new Animal("Ornitorrinco");
animal.emitirSom();
animal.mover(10);

let caramelo = new Cachorro("Caramelo");
caramelo.emitirSom();
caramelo.mover(10);
caramelo.pegar();