console.log("Hello TypeScript");

interface IPessoa {
  nome: string;
  idade: number;
}

class Pessoa implements IPessoa {
  nome: string;
  idade: number;
  private _senha: number;

  constructor(nome: string, idade: number, senha: number) {
    this.nome = nome;
    this.idade = idade;
    this._senha = senha;
  }

  get senha(): number {
    return this._senha;
  }
}

class Aluno extends Pessoa {
  escolaridade: number;

  constructor(
    nome: string,
    idade: number,
    senha: number,
    escolaridade: number
  ) {
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
