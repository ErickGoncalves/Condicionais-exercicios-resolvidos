const jogada1 = "pedra"
const jogada2 = "tesoura"

//seu código aqui

if (jogada1 === "pedra" && jogada2 === "tesoura") {
    // primeira condição   
    console.log("Jogador 1 venceu");
} else if (jogada1 === "pedra" && jogada2 === "papel") {
    // segunda condição   
    console.log("Jogador 2 venceu");
} else if (jogada1 === "tesoura" && jogada2 === "papel") {
    // terceira condição   
    console.log("Jogador 1 venceu");
} else if (jogada1 === "tesoura" && jogada2 === "pedra") {
    // quarta condição   
    console.log("Jogador 2 venceu");
} else if (jogada1 === "papel" && jogada2 === "pedra") {
    // quinta condição   
    console.log("Jogador 1 venceu");
} else if (jogada1 === "papel" && jogada2 === "tesoura") {
    // sexta condição   
    console.log("Jogador 2 venceu");
} else if (jogada1 === jogada2) {
    //condição de empate
    console.log("Empate");
} else {
    // condição inválida
    console.log("Selecione uma das opções válidas para o jogo.")
}