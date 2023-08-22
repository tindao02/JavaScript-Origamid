const carro = {
    marca: 'Marca',
    preco: 0,
}

const honda = carro;
honda.marca = 'Honda';
honda.preco = 2000;

function Carro() {
    this.marca = 'Marca';
    this.preco = 0;
}

const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.preco = 3000;

const nissan = new Carro();
nissan.marca = 'Nissan';
nissan.preco = 1200;

//******************** */

function Carro2(marca, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    this.preco = precoFinal;
    console.log(this);
}


/*********** */