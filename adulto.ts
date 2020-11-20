import { Personagem } from "./Personagem";
import {Util} from "./Util";

export class adulto extends Personagem{
        
        constructor(nome:string){
            super(nome);
            this._nome = nome;
            this._animacao = Util.randomizar(100);
            this._saude = Util.randomizar(100);
            this._peso = Util.randomizar(50);
            this._fome = Util.randomizar(50);
            this._sede = Util.randomizar(50);
            this._sono = Util.randomizar(50)
            this._higiene = Util.randomizar(50);
            this._temperatura = Util.randomizar(37);
        }
}
