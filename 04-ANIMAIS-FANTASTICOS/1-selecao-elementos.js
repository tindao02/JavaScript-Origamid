// Retorne no console todas as imagens do site
const imagens = document.getElementsByTagName('img');
console.log('imagens: ', imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]')
console.log('imagensAnimais: ', imagensAnimais);

// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('a[href^="#"');
console.log('linkInterno: ', linkInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroh2 = document.querySelector('h2');
console.log('primeiroh2: ', primeiroh2);

// Selecione o último p do site
const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[--ultimoP.length]);