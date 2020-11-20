import Tamagotchi from "./Tamagotchi" 
import prompt from 'prompt-sync';
import {bebe} from "./bebe";
import {adulto} from "./adulto";
import {idoso} from "./idoso";
//import { Personagem } from "./Personagem";

let Pou: Tamagotchi = new Tamagotchi("Pou", 100,50, 5,50,50,50,100, 37);
//let Tom: Personagem = new bebe('Tom');
//let Mary: Personagem = new adulto('Mary');
//let Pou: Personagem = new idoso('Pou');

let teclado = prompt();
let option: number = 0;


while(option != 9){
    console.log(`======= Olá, eu sou o ${Pou.nome} =======`);
    console.log('| 1. Status                |');
    console.log('| 2. Conversar             |');
    console.log('| 3. Dar Comida            |');
    console.log('| 4. Dar Água              |');
    console.log('| 5. Brincar               |');
    console.log('| 6. Dar Banho             |');
    console.log('| 7. Dormir                |');
    console.log('| 8. Dar Remédio           |');
    console.log('==========================');

    option = +teclado('Digite a opcao ');

    switch(option){
        //status
        case 1: 

            console.log(Pou.status());
            Pou.dormir();
            Pou.doente();
            
        break;

        //Conversar
        case 2:
            Pou.conversar();       
        break;

        //Dar comida
        case 3:
            Pou.comida();
            
        break;

        //Dar agua
        case 4:
            Pou.bebida();
        break;

        //Brincar
        case 5:
            Pou.brincar();
            
        break;

        //Dar banho
        case 6:
            Pou.banho();
            
        break;

        //Dormir
        case 7:
            Pou.Sono();         
        break;

        //Remedio
        case 8:
            Pou.remedio();       
        break;


        default:
                if(option != 9){
                    console.log('Ops... Não entendi');
                    console.log()
                }
                else if(option == 9){
                    console.log('Até mais');
                    console.log()
                }
        break;
    }




}
