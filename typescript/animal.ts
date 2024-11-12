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
    private raça : string;

    constructor(nome : string, raça : string) {
        super(nome);
        this.raça = raça;
    }
    emitirSom(): void {
        console.log("au au au au");
    }
    pegar(): void {
        console.log("vá pegar!!!!");
    }
}

class Gato extends Animal {
    constructor(nome : string) {
        super(nome);
    }
    emitirSom(): void {
        console.log("miau miau");
    }
}
/*
let animal = new Animal("Ornitorrinco");
animal.emitirSom();
animal.mover(10);

let caramelo = new Cachorro("Caramelo", "Vira-lata");
caramelo.emitirSom();
caramelo.mover(10);
caramelo.pegar();
*/
let animais : Animal[] = [new Animal("Onça"), 
                          new Cachorro("Mel", "Pinscher"), 
                          new Gato("Bichano")];
animais.forEach(animal => {
    animal.emitirSom();
});
