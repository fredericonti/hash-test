/* eslint-disable no-unused-vars */
const update = () => {
  const valorVenda = document.getElementById('valorVenda').value; // valor da compra
  const numeroParcelas = document.getElementById('parcelas').value; // numero de parcelas
  const taxaMDR = document.getElementById('mdr').value; // taxa do mdr
  
  const receber1Dia = 1;
  const receber15Dias = 15;
  const receber30Dias = 30;
  const receber90Dias = 90;

  const receber1Array = [];
  const receber15Array = [];
  const receber30Array = [];
  const receber90Array = [];

  for (let i = 0; i < numeroParcelas; i += 1) {
    receber1Array.push((30 * (i + 1)) - receber1Dia);
    receber15Array.push((30 * (i + 1)) - receber15Dias);
    receber30Array.push((30 * (i + 1)) - receber30Dias);
    receber90Array.push((30 * (i + 1)) - receber90Dias);
  }

  for (let i = 0; i < numeroParcelas; i += 1) {
    if (receber1Array[i] < 0) {
      receber1Array[i] = 0;
    }
    if (receber15Array[i] < 0) {
      receber15Array[i] = 0;
    }
    if (receber30Array[i] < 0) {
      receber30Array[i] = 0;
    }
    if (receber90Array[i] < 0) {
      receber90Array[i] = 0;
    }
  }

  const transformarTaxaMDR = () => taxaMDR / 100;
  const taxaMdrTransformada = transformarTaxaMDR(); // taxa do mdr transformada
  const valorTotal = () => valorVenda - (valorVenda * taxaMdrTransformada);
  const valorDescontado = valorTotal(); // valor de venda bruto com desconto da taxa MDR
  const valorPorMes = () => valorDescontado / numeroParcelas;
  const taxaAntecipacao = taxaMdrTransformada; // taxa de antecipacao
  const valorParcelado = valorPorMes(); // valor de venda parcelado


  // numero de parcelas no array
  const calcAmanha = () => {
    const numParcelasArray = [];
    for (let i = 0; i < numeroParcelas; i += 1) {
      numParcelasArray.push(i + 1);
    }
    return numParcelasArray;
  };

  const receberAmanha = calcAmanha();

  // recebiveis em cada parcela
  const recebiveisParcelas1Dia = [];
  const recebiveisParcelas15Dia = [];
  const recebiveisParcelas30Dia = [];
  const recebiveisParcelas90Dia = [];

  let recebivelTotal1Dia = 0;
  let recebivelTotal15Dia = 0;
  let recebivelTotal30Dia = 0;
  let recebivelTotal90Dia = 0;

  let recebivelMes1Dia;
  let recebivelMes15Dia;
  let recebivelMes30Dia;
  let recebivelMes90Dia;

  receberAmanha.map((mes) => {
    recebivelMes1Dia = valorParcelado - (
      valorParcelado * (taxaAntecipacao / 30 * receber1Array[mes - 1]));
    recebiveisParcelas1Dia.push(`R$${recebivelMes1Dia.toFixed(2)}`);
    recebivelTotal1Dia += recebivelMes1Dia;

    recebivelMes15Dia = valorParcelado - (
      valorParcelado * (taxaAntecipacao / 30 * receber15Array[mes - 1]));
    recebiveisParcelas15Dia.push(`R$${recebivelMes15Dia.toFixed(2)}`);
    recebivelTotal15Dia += recebivelMes15Dia;

    recebivelMes30Dia = valorParcelado - (
      valorParcelado * (taxaAntecipacao / 30 * receber30Array[mes - 1]));
    recebiveisParcelas30Dia.push(`R$${recebivelMes30Dia.toFixed(2)}`);
    recebivelTotal30Dia += recebivelMes30Dia;

    recebivelMes90Dia = valorParcelado - (
      valorParcelado * (taxaAntecipacao / 30 * receber90Array[mes - 1]));
    recebiveisParcelas30Dia.push(`R$${recebivelMes30Dia.toFixed(2)}`);
    recebivelTotal90Dia += recebivelMes90Dia;
    return mes;
  });


  const amanhaElement = document.getElementById('amanha');
  const em15Element = document.getElementById('em15');
  const em30Element = document.getElementById('em30');
  const em90Element = document.getElementById('em90');

  if (valorVenda !== '' && numeroParcelas !== '' && taxaMDR !== '') {
    amanhaElement.innerHTML = `R$ ${recebivelTotal1Dia.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    em15Element.innerHTML = `R$ ${recebivelTotal15Dia.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    em30Element.innerHTML = `R$ ${recebivelTotal30Dia.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    em90Element.innerHTML = `R$ ${recebivelTotal90Dia.toLocaleString('pt-BR',  { minimumFractionDigits: 2 })}`;
  } else {
    amanhaElement.innerHTML = 'R$ 0,00';
    em15Element.innerHTML = 'R$ 0,00';
    em30Element.innerHTML = 'R$ 0,00';
    em90Element.innerHTML = 'R$ 0,00';

  }
};
