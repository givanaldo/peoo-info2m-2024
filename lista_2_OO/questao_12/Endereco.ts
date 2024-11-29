export class Endereco {
    private _rua: string;
    private _cidade: string;
    private _cep: string;
  
    constructor(rua: string, cidade: string, cep: string) {
      this._rua = rua;
      this._cidade = cidade;
      this._cep = cep;
    }
  
    get rua(): string { return this._rua; }  
    set rua(rua: string) { this._rua = rua; }  
    get cidade(): string { return this._cidade; }  
    set cidade(cidade: string) { this._cidade = cidade; }  
    get cep(): string { return this._cep; }  
    set cep(cep: string) { this._cep = cep; }
  }