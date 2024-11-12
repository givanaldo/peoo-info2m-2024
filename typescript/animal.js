var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    Animal.prototype.emitirSom = function () {
        console.log("Som do animal.");
    };
    Animal.prototype.mover = function (distancia) {
        console.log("".concat(this.nome, " se moveu ").concat(distancia, " metros."));
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(nome, raça) {
        var _this = _super.call(this, nome) || this;
        _this.raça = raça;
        return _this;
    }
    Cachorro.prototype.emitirSom = function () {
        console.log("au au au au");
    };
    Cachorro.prototype.pegar = function () {
        console.log("vá pegar!!!!");
    };
    return Cachorro;
}(Animal));
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(nome) {
        return _super.call(this, nome) || this;
    }
    Gato.prototype.emitirSom = function () {
        console.log("miau miau");
    };
    return Gato;
}(Animal));
/*
let animal = new Animal("Ornitorrinco");
animal.emitirSom();
animal.mover(10);

let caramelo = new Cachorro("Caramelo", "Vira-lata");
caramelo.emitirSom();
caramelo.mover(10);
caramelo.pegar();
*/
var animais = [new Animal("Onça"),
    new Cachorro("Mel", "Pinscher"),
    new Gato("Bichano")];
animais.forEach(function (animal) {
    animal.emitirSom();
});
