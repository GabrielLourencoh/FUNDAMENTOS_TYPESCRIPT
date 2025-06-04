"use strict";
// Tipos basicos
let age = 5;
const firstName = 'Felipe';
const isValid = true;
let idk = 5; // declaração 'any' faz com que essa variavel fique com qualquer tipo de dado, podendo ser trocado ao decorrer do codigo
idk = '12';
idk = true;
const ids = [1, 2, 3, 4, 5]; // criando um array/lista de number
const booleans = [true, false, true, false];
const names = ['Felipe', "Joao"];
// Tupla
// Tupla -> Como se fosse uma lista que segue uma determinada ordem
// NEsse caso, a tupla segue a ordem de valor, sendo respectivamente, number e string
const person = [1, 'Joao'];
//Lista de Tuplas
const people = [
    [1, 'Joao'],
    [2, 'Gabriel']
];
// Intersections -> quando queremos que uma variavel pode ser tanto um, quanto outro. Nesse caso, podemos por number ou string ou boolean
const productId = 1;
// Enum -> Definimos alguns termos, nesse contexto, podemos ter algum valor como 1 ou 2, mas associados
// Ao nome Up or Down, ou seja, é uma maneira de definir se é um ou outro por um nome que ja foi salvo em algum lugar
// Podemos acrescetntar quantos valores e tipos quisermos, por exemplo, colocar um left = 'esquerda'
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "Esquerda";
})(Direction || (Direction = {}));
;
const direction = Direction.Up;
// Type Assertions
const productName = 'Boné';
// let itemId = productName as string; // Atribui o valor do productName no itemId e o define como String.
// outra forma:
let itemId = productName; // Atribui o valor do productName no itemId e o define como String.
console.log(direction);
