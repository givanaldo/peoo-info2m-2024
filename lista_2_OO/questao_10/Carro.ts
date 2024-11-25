export class Carro {
    private _marca: string;
    private _modelo: string;
    private _ano: number;
  
    constructor(marca: string, modelo: string, ano: number = 2022) {
      this._marca = marca;
      this._modelo = modelo;
      this._ano = ano;
    }
  
    get marca(): string { return this._marca; }
  
    set marca(marca: string) { this._marca = marca; }
  
    get modelo(): string { return this._modelo; }
  
    set modelo(modelo: string) { this._modelo = modelo; }
  
    get ano(): number { return this._ano; }
  
    set ano(ano: number) { this._ano = ano; }
  }