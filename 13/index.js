//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

// Forma de Pagamento	Desconto
// credito	               5%
// cheque	                 3%
// debito ou dinheiro	     10%


if (tipoDePagamento === "credito") {
    const valorFinal = (valorDoProduto - (valorDoProduto * 0.05))

    console.log(`Valor a ser pago: R$ ${valorFinal}`)
}


if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
    const valorFinal = (valorDoProduto - (valorDoProduto * 0.1))

    console.log(`Valor a ser pago: R$ ${valorFinal}`)
}


if (tipoDePagamento === "cheque") {
    const valorFinal = (valorDoProduto - (valorDoProduto * 0.03))

    console.log(`Valor a ser pago: R$ ${valorFinal}`)
}