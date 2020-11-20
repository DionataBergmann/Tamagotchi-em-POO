import { Personagem } from "./Personagem";
import {Util} from "./Util";

export class bebe extends Personagem{
    
        constructor(nome:string){
            super(nome);
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

