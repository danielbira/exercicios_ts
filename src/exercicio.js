"use strict";
function calcular(numero1, numero2) {
    return numero1 * numero2;
}
calcular(10, 5);
console.log(calcular);
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    dizOla() {
        return `Olá meu nome é ${this.nome}`;
    }
}
new Pessoa('Daniel');
