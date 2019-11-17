
const valorVenda = 150; //valor da compra
const numeroParcelas = 3; //numero de parcelas
const taxaMDR = 4; //taxa do mdr
const numeroParcelasEmDias = (numeroParcelas*30);


const receberAmanha = [29, 59, 89, 119, 149, 179, 209, 239, 269, 299, 329, 359]
console.log(`Valor bruto da venda é de ${valorVenda}`)
console.log(`Foi parcelado esse valor em ${numeroParcelas}x`)
console.log(`Isso em dias equivale a ${numeroParcelasEmDias} dias`)


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
if (receberAmanha[0]) {
    // console.log(`Parcelou em 1x e deu ${valorParcelado-(valorParcelado*(taxaAntecipacao/30)*numeroParcelasEmDias)}`)
    console.log(`Parcelou em 1x e deu ${valorParcelado-(valorParcelado*(taxaAntecipacao/30)*receberAmanha[0])}`)
}



