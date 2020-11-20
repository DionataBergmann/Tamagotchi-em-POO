import {Util} from "./Util";

export class Personagem{
        protected _nome: string;
        protected _animacao: number;
        protected _saude: number;
        protected _peso: number;
        protected _fome: number;
        protected _sede: number;
        protected _sono: number;
        protected _higiene: number;
        protected _temperatura: number;
        

    constructor(nome:string){
        this._nome = nome;
        this._animacao = Util.randomizar(50);
        this._saude = Util.randomizar(25);
        this._peso = Util.randomizar(1);
        this._fome = Util.randomizar(10);
        this._sede = Util.randomizar(10);
        this._sono = Util.randomizar(30)
        this._higiene = Util.randomizar(50);
        this._temperatura = Util.randomizar(37);
    }
}

