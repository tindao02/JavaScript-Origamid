// function espera(texto) {
//     console.log(texto);
// }

// setTimeout(espera, 1000, 'Passou 1s');

// setInterval(() => console.log('1') , 300);


// let i = 0;
// const meuLoop = setInterval(() => {
//     console.log(i++);
//     if(i > 10) {
//         clearInterval(meuLoop);
//     }
// }, 200);



// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// let body = document.querySelector('body');
// setInterval(() => {
//     body.style.backgroundColor = (body.style.backgroundColor == 'rgb(135, 206, 250)' ? 'rgb(127, 255, 212)' : 'rgb(135, 206, 250)');
// }, 2000);



// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', reiniciarTempo);

let i = 0;
let timer;

function iniciarTempo() {
    timer = setInterval(() => tempo.innerText = i++, 100);
    iniciar.setAttribute('disabled', '');
}

function pausarTempo() {
    clearInterval(timer);
    iniciar.removeAttribute('disabled');
}

function reiniciarTempo() {
    tempo.innerText = 0;
    i = 0;
    iniciar.removeAttribute('disabled');
}