// Tipos basicos
let age: number = 5;
const firstName: string = 'Felipe';
const isValid: boolean = true;
let idk: any = 5; // declaração 'any' faz com que essa variavel fique com qualquer tipo de dado, podendo ser trocado ao decorrer do codigo

idk = '12';
idk = true;

const ids: number[] = [1, 2, 3, 4, 5]; // criando um array/lista de number
const booleans: boolean[] = [true, false, true, false];
const names: string[] = ['Felipe', "Joao"];

// Tupla
// Tupla -> Como se fosse uma lista que segue uma determinada ordem
// NEsse caso, a tupla segue a ordem de valor, sendo respectivamente, number e string
const person: [number, string] = [1, 'Joao'];

//Lista de Tuplas
const people: [number, string][] = [
    [1, 'Joao'],
    [2, 'Gabriel']
];

// Intersections -> quando queremos que uma variavel pode ser tanto um, quanto outro. Nesse caso, podemos por number ou string ou boolean
const productId: string | number | boolean = 1;

// Enum -> Definimos alguns termos, nesse contexto, podemos ter algum valor como 1 ou 2, mas associados
// Ao nome Up or Down, ou seja, é uma maneira de definir se é um ou outro por um nome que ja foi salvo em algum lugar
// Podemos acrescetntar quantos valores e tipos quisermos, por exemplo, colocar um left = 'esquerda'
enum Direction {
    Up = 1, 
    Down = 2,
    Left = 'Esquerda'
};
const direction = Direction.Up;

// Type Assertions
const productName: any = 'Boné';

// let itemId = productName as string; // Atribui o valor do productName no itemId e o define como String.
// outra forma:
let itemId = <string>productName; // Atribui o valor do productName no itemId e o define como String.

console.log(direction);