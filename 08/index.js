const idade = 12;
const possuiPatologia = true;
const altura = 155;
const ehEstudante = false;

//seu código aqui

if (idade < 12 && idade > 65 || possuiPatologia || altura < 150) {
    console.log("ACESSO NEGADO")
} else if (ehEstudante || idade < 18) {
    console.log("10 reais")
} else {
    console.log("20 reais")
}