//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 90000;

let valorDaParcela = (valorDoProduto / quantidadeDoParcelamento);

let quantidadeDeParcelasPagas = valorPago / valorDaParcela;

let parcelasDevedoras = quantidadeDoParcelamento - quantidadeDeParcelasPagas;

if (parcelasDevedoras === 1) {
    console.log(`Resta ${parcelasDevedoras} parcela de R$ ${valorDaParcela}`)
} else if (valorDoProduto > valorPago) {
    console.log(`Restam ${parcelasDevedoras} parcelas de R$ ${valorDaParcela}`)
} else {
    console.log("Produto quitado.")
}

/* if (valorDoProduto === valorPago) {
    console.log("Produto quitado.")
} else if (valorDoProduto > valorPago) {
    let valorDaParcela = valorDoProduto / quantidadeDoParcelamento;

    let quantidadeDeParcelasPagas = valorPago / valorDaParcela;

    let final = quantidadeDoParcelamento - quantidadeDeParcelasPagas;

    console.log(`Restam ${final} parcelas de R$ ${valorDaParcela}`)
}*/
