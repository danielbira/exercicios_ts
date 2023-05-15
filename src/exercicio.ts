function calcular (numero1: number, numero2: number): number{
    return numero1 * numero2
}

calcular(10, 5)
console.log(calcular)

class Pessoa {
    nome: string;

    constructor(nome:string){
        this.nome = nome
    }

    dizOla(): string{
        return `Olá meu nome é ${this.nome}`;
    }
    
    
}

new Pessoa('Daniel')
