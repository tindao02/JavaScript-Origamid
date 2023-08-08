console.log('Objeto');

var pessoa = {
    nome: 'André',
    idade: 14,
    profissao: 'Dev',
    possuiFaculdade: true,
    area(lado) {
        return lado * lado;
    },
}

console.table(pessoa);
console.log(pessoa.nome);
console.log(pessoa.area(4));