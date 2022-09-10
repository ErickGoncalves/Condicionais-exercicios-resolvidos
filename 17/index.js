//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 90000;

if (valorDoProduto === valorPago) {
    console.log("Produto quitado.")
} else if (valorDoProduto > valorPago) {
    let valorDaParcela = valorDoProduto / quantidadeDoParcelamento;

    let quantidadeDeParcelasPagas = valorPago / valorDaParcela;

    let final = quantidadeDoParcelamento - quantidadeDeParcelasPagas;

    console.log(`Restam ${final} parcelas de R$ ${valorDaParcela}`)
}
