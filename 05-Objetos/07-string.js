// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

    const transacoes = [ 
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 490',
    },
  ];

  let taxaTotal = 0;
  let recebimentoTotal = 0;
  transacoes.forEach(item => {
    const valorLimpo = +item.valor.replace('R$ ','');
    if(item.descricao.slice(0,4) === 'Taxa') taxaTotal += valorLimpo;
    else if(item.descricao.slice(0,11) === 'Recebimento') recebimentoTotal += valorLimpo;
  });

  console.log(taxaTotal);
  console.log(recebimentoTotal);
  
  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
  const arrayTrasportes = transportes.split(';');
  console.log(arrayTrasportes);
  // Substitua todos os span's por a's
  const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;
  
  // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';
  
  // Retorne o total de taxas
  const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
  
  
  