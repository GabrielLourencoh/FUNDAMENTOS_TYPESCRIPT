// Deixar a tipagem de funções mais dinamicas

//MSM coisa que -> 
// const returnValue = <T>(value: T): T => {
//     return value;
// }

// A convenção é nomear esse generic como <T>
const returnValue = <T>(value: T): T => value; // Tambem podemos receber mais que um generic

const message = returnValue<String>("HEllo world")
const count = returnValue<number>(5)

// OUtro exemplos, mas como função
function getFirstValueFromArray<Type>(array: Type[]): Type {
    return array[0];
}

const firstValueFromStringArray = getFirstValueFromArray<String>(['1', '2']);
const firstValueFromNumberArray = getFirstValueFromArray<number>([10, 20]);

// Promise
const returnPromise = async (): Promise<number> => {
    return 5;
}

// Generics com classes
class GenericNumber<T> {
    zeroValue: T;
    sum: (x: T, y: T) => T;

    constructor(zeroValue: T, sum: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}

const myGenericNumber = new GenericNumber<number>(0, (x: number, y:number) => {
    return x + y;
})