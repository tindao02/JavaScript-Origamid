const menu = document.querySelector('.menu');

console.log(menu);
console.log(menu.classList);
console.log(menu.classList[0]);

menu.classList.add('ativo');
console.log(menu.classList);

menu.classList.remove('ativo');
console.log(menu.classList);

menu.classList.add('Azul', 'Preto', 'Vermelho');
console.log(menu.classList);

menu.classList.remove('Preto');
console.log(menu.classList);


menu.classList.toggle('Preto');
console.log(menu.classList);

console.log(menu.classList.contains('Preto'));

menu.classList.toggle('Preto');
console.log(menu.classList);

console.log(menu.classList.contains('Preto'));

menu.classList.replace('Azul', 'Preto');
console.log(menu.classList);

// ATTRIBUTES

const animais = document.querySelector('.animais');

console.log(animais);
console.log(animais.attributes);
console.log(animais.attributes[1]);
console.log(animais.attributes['class']);

console.log(animais.getAttribute('data-text'));

animais.setAttribute('data-text', 'valor')
console.log(animais.getAttribute('data-text'));

console.log(animais.hasAttribute('data-text'));
console.log(animais.hasAttribute('teste'));

console.log(animais.attributes);
animais.removeAttribute('data-text');
console.log(animais.attributes);

console.log(animais.hasAttributes());



// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach(item => item.classList.add('ativo'));

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach(item => item.classList.remove('ativo'));
itensMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');

imgs.forEach(img => console.log(img, img.hasAttribute('alt')));

// Modifique o href do link externo no menu

