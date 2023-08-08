let h1 = document.querySelector('h1');
console.log(h1.classList);

h1.textContent= 'Mudei o texto';

h1.addEventListener('click', () => console.log(h1.innerHTML));

console.log(window.location.href);
console.log(window.innerWidth);