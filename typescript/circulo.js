var Circulo = /** @class */ (function () {
    function Circulo(raio, x, y) {
        this.raio = raio;
        this.x = x;
        this.y = y;
    }
    Circulo.prototype.getRaio = function () {
        return this.raio;
    };
    Circulo.prototype.setRaio = function (r) {
        if (r <= 0)
            console.log('Você já estudou Geometria??');
        else if (r > 15)
            console.log('Raio não alterado. Limite ultrapassado.');
        else
            this.raio = r;
    };
    Circulo.prototype.mover = function (x, y) {
        this.x += x; // this.x = this.x + x;
        this.y += y; // this.y = this.y + y;
    };
    Circulo.prototype.aumentar = function (r) {
        this.raio += r;
    };
    Circulo.prototype.exibir = function () {
        return "Raio: ".concat(this.raio, ", X: ").concat(this.x, ", Y: ").concat(this.y);
    };
    return Circulo;
}());
/*let circulo1 = new Circulo(2, 0, 0);
console.log(circulo1.exibir());
circulo1.aumentar(5);
console.log(circulo1.exibir());
circulo1.mover(2, 4);
console.log(circulo1.exibir());*/
var circulo2 = new Circulo(3, 5, 2);
console.log(circulo2.exibir());
circulo2.setRaio(-4);
console.log(circulo2.getRaio());
console.log(circulo2.exibir());
