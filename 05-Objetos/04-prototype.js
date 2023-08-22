function Pessoa(nome, idade) {
    this.nome   = nome;
    this.idade  = idade;
}

const maria = new Pessoa( null,25);

console.log(Pessoa.prototype);
console.log(maria.prototype);

console.log(maria);