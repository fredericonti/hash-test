
const valorVenda = 150; //valor da compra
const numeroParcelas = 3; //numero de parcelas
const taxaMDR = 4; //taxa do mdr
const numeroDias = (numeroParcelas*30);
console.log(`Valor bruto da venda é de ${valorVenda}`)
console.log(`Foi parcelado esse valor em ${numeroParcelas}x`)
console.log(`Isso em dias equivale a ${numeroDias} dias`)

const transformarTaxaMDR = () => {
  const taxaMdrTransformada = taxaMDR / 100;
  return taxaMdrTransformada
}
const taxaMdrTransformada = transformarTaxaMDR(); //taxa do mdr transformada
const taxaAntecipacao = taxaMdrTransformada; //taxa de antecipacao
console.log(`A taxa do MDR é de ${taxaMdrTransformada} e Taxa de Antecipação também é de ${taxaAntecipacao}`)


const valorTotal = () => {
  const valorComTaxa = valorVenda * taxaMdrTransformada;
  const valorDescontadoTotal = valorVenda - valorComTaxa;
  return valorDescontadoTotal;
}
const valorDescontado = valorTotal(); // valor de venda bruto com desconto da taxa MDR
console.log(`Valor bruto com a taxa do MDR é de ${valorDescontado}`)


const valorPorMes = () => {
  const valor = valorDescontado/numeroParcelas;
  return valor;
}
const valorParcelado = valorPorMes(); // valor de venda parcelado
console.log(`Por mês, sem o juros é de ${valorParcelado}`)

 // taxa diária
switch (numeroDias) {
  case 15:
    console.log(`Parcelou em 1x e deu ${valorDescontado-(valorDescontado*(taxaAntecipacao/30)*numeroDias)}`)
    break;

    case 30:
    console.log(`Parcelou em 2x e deu ${valorDescontado-(valorDescontado*(taxaAntecipacao/30)*numeroDias)}`)
    break;
    
    case 61:
    console.log(`Parcelou em 3x e deu ${valorDescontado-(valorDescontado*(taxaAntecipacao/30)*numeroDias)}`)
    break;

    case 91:
    console.log(`Parcelou em 4x e deu ${valorParcelado-(valorParcelado*(taxaAntecipacao/30)*numeroDias)}`)
    break;

    case 5:
    console.log(`Parcelou em 5x e deu ${valorDescontado/numeroParcelas}`)
    break;


    default:
    console.log(`Ops! Ocorreu um erro! ${0}`)
    break;
}



