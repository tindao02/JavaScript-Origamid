// const imgs = document.querySelectorAll('img');

// imgs.forEach(function(item, index, arrays){
//     console.log(index, arrays);
// });

// imgs.forEach(item => console.log(item));



// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach(p => console.log(p));

// Mostre o texto dos parágrafos no console
paragrafos.forEach(p => console.log(p.innerText));

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( () => {
  console.log(i++);
});

imgs.forEach(() => i++);