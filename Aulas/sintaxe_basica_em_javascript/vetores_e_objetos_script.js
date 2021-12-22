// Declarar arrays
let array = ['string',1,true,['array'],['array2']];
console.log(array);
console.log(array[0]); // Retorna um indice do array

array.forEach(function(item,index){console.log(item,index)}) // Retorna o item e o indice

array.push('novo item'); // Manda um dado novo no array
console.log(array);

array.pop(); // Retira um item do final do array
console.log(array); 

array.shift();
console.log(array); // Retira um item do inicio do array

array.unshift('novo item no inicio'); // Adiciona novo item no inicio do array
console.log(array);

console.log(array.indexOf(true)); // Mostra qual o indice está o valor x

array.splice(0,3); // Apaga os selecionados e devolve como se fosse um novo array
console.log(array);

let novoArray = array.slice(0,3);
console.log(novoArray);

let object = {string: 'string', number: 1, boolean: true, array:["array"],objectInterno:{objectInterno:'objeto interno'}};
console.log(object);
console.log(object.boolean);
console.log(object.objectInterno);

// Desestruturação

var string = object.string;
console.log(string);

var arrayInterno = object.array; // Pega o valor do array e manda para o array Interno
console.log(arrayInterno);


// Outra forma de desestruturação
var{string, boolean, objectInterno} = object;
console.log(string,boolean,objectInterno);