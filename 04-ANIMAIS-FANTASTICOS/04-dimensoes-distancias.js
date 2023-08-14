const section = document.querySelector('.animais');

console.log(section.clientHeight);
console.log(section.offsetHeight);
console.log(section.scrollHeight);

// tamanho da janela
console.log('width da janela: ',window.innerWidth);
console.log('Height da janela: ', window.innerHeight);

console.log('distância total do scroll vertical: ', window.pageYOffset);
console.log('distância total do scroll vertical: ', window.scrollY);

console.log('distância total do scroll horizontal: ', window.pageXOffset);
console.log('distância total do scroll horizontal: ', window.scrollX);

// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img')
console.log(img.offsetTop);

// Retorne a soma da largura de todas as imagens
const somaImagens = function() {
  const imagens = document.querySelectorAll('img');
  let soma = 0;
  imagens.forEach(imagem => soma += imagem.offsetWidth);
  console.log(soma);
}

window.onload = function() {
  somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');

links.forEach(link => {
  if(link.offsetWidth >= 48 && link.offsetHeight >= 48) console.log(link, 'Possui boa acessibilidade');
  else console.log(link, 'Não possui boa acessibilidade', link.offsetWidth, link.offsetHeight);
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width: 720px)').matches;
if(browserSmall) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}
console.log(document.querySelector('.menu').classList);