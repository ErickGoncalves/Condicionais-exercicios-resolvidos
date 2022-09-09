//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 2;

// As informações abaixo indicam o risco de complicações na saúde com base na injestão diária de água.
if (quantidadeDeAguaIngerida < 1.5) {
    console.log("Risco Alto - Você está ingerindo pouquissima água, beba mais água!")
} else if (quantidadeDeAguaIngerida >= 1.5 && quantidadeDeAguaIngerida <= 3) {
    console.log("Risco Moderado - Você está ingerindo pouca água, beba mais!")
} else if (quantidadeDeAguaIngerida > 3) {
    console.log("Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!")
}