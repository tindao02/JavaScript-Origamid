const img = document.querySelector('img');

// img.addEventListener('click', () => console.log('clicou'));
const callback = function(event) {
  console.log('clicou', event);
}
// img.addEventListener('click', callback);


const animaisLista = document.querySelector('.animais-lista');
const callbackLista = function(event) {
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
}
// animaisLista.addEventListener('click', callbackLista);


const linkExterno = document.querySelector('a[href^="http"');
const handleLinkExterno = function(event) {
  event.preventDefault();
 console.log('clicou');
}
linkExterno.addEventListener('click', handleLinkExterno);