// Tipos primitivos

// Boolean
var vOuF = false;
console.log(typeof(vOuF)); // Mostra tipo da variável
console.log(vOuF); // Mostra variável

// Number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));
console.log(numeroQualquer);

// String
var nome = 'Adrian';
console.log(typeof(nome));
console.log(nome);


// Declaração de Variáveis
var variavel = 'Adrian';
variavel = 'Santos';
console.log(variavel);

let variavel2 = 'Adrian';
variavel2 = 'Colombo';
console.log(variavel2);

const constante = 'Adrian'; // Constante não pode ser reatribuida
console.log(constante)

// Escopos
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}
escopoLocal(); 

// Atribuição
var atribuicao = 'Adrian';

// Comparação
var comparacao = '0' == 0;
console.log(comparacao);

// Comparação Idêntica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica); // Valores iguais mas tipos diferentes

// Divisão inteira
var divisaoInteira = 5%2;
console.log(divisaoInteira);

// Potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);