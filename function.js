
const valorVenda = 150; //valor da compra
const numeroParcelas = 2; //numero de parcelas
const taxaMDR = 4; //taxa do mdr
const receber1Dia = 1
const receber15Dias = 15
const receber30Dias = 30
const receber90Dias = 90

const dias = 15;

const receber1Array = [];
const receber15Array = [];
const receber30Array = [];
const receber90Array = [];

for (let i = 0; i < numeroParcelas; i += 1) {
  receber1Array.push((30 * (i + 1)) - receber1Dia);
  receber15Array.push((30 * (i + 1)) - receber15Dias);
  receber30Array.push((30 * (i + 1)) - receber30Dias);
  receber90Array.push((30 * (i + 1)) - receber90Dias);
  console.log((30 * (i + 1)) - receber1Dia, (30 * (i + 1)) - receber15Dias, (30 * (i + 1)) - receber30Dias, (30 * (i + 1)) - receber90Dias);
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

const receberAmanhaTest = 
[(30 - dias), (60 - dias), (90 - dias), (120 - dias), (150 - dias),(180 - dias), (210 - dias), (180 - dias), (210 - dias), (240 - dias), (270 - dias), (300 - dias), (330 - dias), (360 - dias)];


const receber15dias = [(30 - dias), (60 - dias), (90 - dias), (120 - dias), (150 - dias), (180 - dias)];
const receber30dias = [(30 - dias), (60 - dias), (90 - dias), (120 - dias), (150 - dias), (180 - dias)];
const receber90dias = [(30 - dias), (60 - dias), (90 - dias), (120 - dias), (150 - dias), (180 - dias)];

console.log(`Valor bruto da venda é de ${valorVenda}`)
console.log(`Foi parcelado esse valor em ${numeroParcelas}x`)

const transformarTaxaMDR = () => {
  const taxaMdrTransformada = taxaMDR / 100;
  return taxaMdrTransformada
}
const taxaMdrTransformada = transformarTaxaMDR(); //taxa do mdr transformada
const taxaAntecipacao = taxaMdrTransformada; //taxa de antecipacao
console.log(`A taxa do MDR é de ${taxaMdrTransformada} e Taxa de Antecipação também é de ${taxaAntecipacao}`)


const valorTotal = () => {
  const valorComTaxa = valorVenda - (valorVenda * taxaMdrTransformada);
  return valorComTaxa;
}
const valorDescontado = valorTotal(); // valor de venda bruto com desconto da taxa MDR
console.log(`Valor bruto com a taxa do MDR é de ${valorDescontado}`)


const valorPorMes = () => {
  const valor = valorDescontado/numeroParcelas;
  return valor;
}

const valorParcelado = valorPorMes(); // valor de venda parcelado
console.log(`Por mês, sem o juros é de ${valorParcelado}`)


// numero de parcelas no array
const calcAmanha = () => {
  const array = [];
  for (let i = 0; i < numeroParcelas; i += 1) {
    array.push(i + 1);
  }
  return array;
}

const receberAmanha = calcAmanha();

//recebiveis em cada parcela
const recebiveisParcelas1Dia = [];
const recebiveisParcelas15Dia = [];
const recebiveisParcelas30Dia = [];
const recebiveisParcelas90Dia = [];

let recebivelTotal1Dia = 0;
let recebivelTotal15Dia = 0;
let recebivelTotal30Dia = 0;
let recebivelTotal90Dia = 0;

for (const mes of receberAmanha) {
  let recebivelMes1Dia;
  let recebivelMes15Dia;
  let recebivelMes30Dia;
  let recebivelMes90Dia;
  //formula para o primeiro mês
  recebivelMes1Dia = valorParcelado - (valorParcelado * (taxaAntecipacao/30 * receber1Array[mes - 1]));
  recebiveisParcelas1Dia.push(`R$${recebivelMes1Dia.toFixed(2)}`);
  recebivelTotal1Dia += recebivelMes1Dia;

  recebivelMes15Dia = valorParcelado - (valorParcelado * (taxaAntecipacao/30 * receber15Array[mes - 1]));
  recebiveisParcelas15Dia.push(`R$${recebivelMes15Dia.toFixed(2)}`);
  recebivelTotal15Dia += recebivelMes15Dia;

  recebivelMes30Dia = valorParcelado - (valorParcelado * (taxaAntecipacao/30 * receber30Array[mes - 1]));
  recebiveisParcelas30Dia.push(`R$${recebivelMes30Dia.toFixed(2)}`);
  recebivelTotal30Dia += recebivelMes30Dia;

  recebivelMes90Dia = valorParcelado - (valorParcelado * (taxaAntecipacao/30 * receber90Array[mes - 1]));
  recebiveisParcelas90Dia.push(`R$${recebivelMes90Dia.toFixed(2)}`);
  recebivelTotal90Dia += recebivelMes90Dia;
}

console.log(`As parcelas ${recebiveisParcelas1Dia}, total de ${recebivelTotal1Dia.toFixed(2)}`)
console.log(`As parcelas ${recebiveisParcelas15Dia}, total de ${recebivelTotal15Dia.toFixed(2)}`)
console.log(`As parcelas ${recebiveisParcelas30Dia}, total de ${recebivelTotal30Dia.toFixed(2)}`)
console.log(`As parcelas ${recebiveisParcelas90Dia}, total de ${recebivelTotal90Dia.toFixed(2)}`)
