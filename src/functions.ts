// Função simples com dois valores numbers que retorna um number.
// const sum = (x: number, y: number): number => {
//     return x + y;
// };

// Estamos dizendo que toda função que implementar essa interface, precisa receber 'x' e 'y' e precisa retornar um number
interface MathFunc {
    (x: number, y: number): number;
}

const sum: MathFunc = (x: number, y: number): number => {
    return x + y;
};

const sub: MathFunc = (x: number, y: number): number => {
    return x - y;
};

// Podemos falar que a função pode retornar um intersection, sendo ou string ou number, dessa forma:
// const sum = (x: number, y: number): string | number => {
//     return (x + y).toString(); // Estou transformando o resultado em uma string
// };

const value = sum(2, 3); // Ja que a função 'sum' retorna um number, por padrao, essa variavel é um number
const value2 = sum(2, 3);

// Função 'void', não retorna nada!!
const log = (message: string): void => {
    console.log(message);
};

console.log(value);
console.log(log("TEstando a função log"));

