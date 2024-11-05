class Circulo {
    raio: number;
    x: number;
    y: number;
    constructor(raio: number, x: number, y: number) {
        this.raio = raio;
        this.x = x;
        this.y = y;
    }
    
    mover(x: number, y: number) : void {
        this.x += x; // this.x = this.x + x;
        this.y += y; // this.y = this.y + y;
    }

    aumentar(r: number) : void {
        this.raio += r;
    }

    exibir() : string {
        return `Raio: ${this.raio}, X: ${this.x}, Y: ${this.y}`;
    }
}

let circulo1 = new Circulo(2, 0, 0);
let circulo2 = new Circulo(3, 5, 2);
console.log(circulo1.exibir());
// circulo2.raio = 10;
console.log(circulo2.exibir());
