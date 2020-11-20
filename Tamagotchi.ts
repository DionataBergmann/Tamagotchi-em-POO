

export default class Tamagotchi{
    constructor(
    private _nome: string,
    private animacao: number,
    private saude: number,
    private peso: number,
    private fome: number,
    private sede: number,
    private sono: number,
    private higiene: number,
    private temperatura: number
    ){}
    

    public status(): string{
        
            return(
            ('======= Tamagotchi =======')+
            
            ("\nEu sou o (a)"+ this.nome)+
            ("\nFelicidade: "+ this.animacao.toFixed(1))+
            ("\nSaúde: "+ this.saude.toFixed(1))+
            ("\nPeso: "+ this.peso.toFixed(1))+
            ("\nFome: "+ this.fome.toFixed(1))+
            ("\nSede: "+ this.sede.toFixed(1))+
            ("\nSono: "+ this.sono.toFixed(1))+
            ("\nHigiene: "+ this.higiene.toFixed(1))+
            ("\nTemperatura: "+ this.temperatura.toFixed(1))+
            ('\n=====================\n')

            );
    }

    
    public get nome() : string {
        return this._nome;
    }
    
    
    public comida(): void{
        this.fome += this.random(5);
        this.peso += this.random(2);
            if(this.fome <= 10){
                this.saude -= this.random(5);
            }
            if(this.fome > 100){
                this.fome = 100;
            }
            if(this.fome < 0){
                this.fome = 0
                this.saude -= this.random(10);
            }
    }

    public bebida(): void{
        this.sede += Math.random() * 10;
            if(this.sede <= 0){
                this.sede  = 0;
                this.saude -= this.random(10);
            }
            if(this.sede >= 100){
                this.sede = 100;
            }
    }

    public brincar(): void{
            this.animacao += Math.random() * 5;
            this.fome -= this.random(5);
            this.peso -= this.random(2);
            this.sede -= this.random(5);
            this.higiene -= this.random(5);
            this.sono -= this.random(5);
            this.saude += this.random(1);
            if(this.animacao >= 100){
                this.animacao  = 100;
            }
            if(this.animacao < 20){
                this.saude -= this.random(5);
            }
    }


    public remedio(): void{
        
        this.saude = 100;
    }

    public banho(): void{
        this.higiene = 100;
    }

    public dormir(): void{
        if(this.sono < 15){
            this.saude -= this.random(5);
            this.animacao -= this.random(15); 
            console.log("\nPreciso dormir!\n");
            
        }
        this.isDead();
    }

      public conversar(): void{
        this.animacao += this.random(2);
        this.sono -= this.random(2);
        if(this.animacao >= 100){
            this.animacao = 100;
        }

    }
    public Sono(): void{
        this.sono = 100;
    }

    private random(fator: number): number{
        return (Math.random() * fator);
    }

    public isDead(): boolean{
        if(this.saude == 0){
            console.log("R.I.P");
            return true;
        }else{
            return false;
        }
    }

    public doente(): void{
        if(this.saude < 20 && this.saude > 0){
            console.log ("\nEstou Doente!\n");
            
            }
            else{
                
            }
    }
}




