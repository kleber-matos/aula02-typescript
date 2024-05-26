"use strict";
console.log("Hello TypeScript");
class Pessoa {
    constructor(nome, idade, senha) {
        this.nome = nome;
        this.idade = idade;
        this._senha = senha;
    }
    get senha() {
        return this._senha;
    }
}
class Aluno extends Pessoa {
    constructor(nome, idade, senha, escolaridade) {
        super(nome, idade, senha);
        this.escolaridade = escolaridade;
    }
}
//
const infoPessoa = new Pessoa("fulano", 22, 123);
console.log(infoPessoa);
//
const infoAluno = new Aluno("estudante", 11, 123, 2);
console.log(infoAluno);
