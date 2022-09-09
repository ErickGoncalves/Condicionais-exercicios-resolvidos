const caractere = "12";
const vogaisMaiusculas = "A,E,I,O,U";
const vogaisMinusculas = "a,e,i,o,u"

if (vogaisMaiusculas.includes(caractere)) {
    console.log(`${caractere} : É uma vogal maiúscula.`);
} else if (vogaisMinusculas.includes(caractere)) {
    console.log(`${caractere} : É uma vogal minúscula.`);
} else if (caractere < 0 || caractere > 0) {
    console.log(`${caractere} : É um número.`)
} else {
    console.log(`${caractere} : É uma consoante.`)
}