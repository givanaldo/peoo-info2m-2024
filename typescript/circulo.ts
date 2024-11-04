class Circulo {
    raio: number;
    x: number;
    y: number;
    constructor(raio: number, x: number, y: number) {
        this.raio = raio;
        this.x = x;
        this.y = y;
    }
    exibir() : string {
        return `Raio: ${this.raio}, X: ${this.x}, Y: ${this.y}`;
    }
}

let circulo1 = new Circulo(2, 0, 0);
let circulo2 = new Circulo(3, 5, 2);
console.log(circulo1.exibir());
console.log(circulo2.exibir());