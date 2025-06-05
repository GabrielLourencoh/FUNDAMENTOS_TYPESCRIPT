"use strict";
// Deixar a tipagem de funções mais dinamicas
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//MSM coisa que -> 
// const returnValue = <T>(value: T): T => {
//     return value;
// }
// A convenção é nomear esse generic como <T>
const returnValue = (value) => value; // Tambem podemos receber mais que um generic
const message = returnValue("HEllo world");
const count = returnValue(5);
// OUtro exemplos, mas como função
function getFirstValueFromArray(array) {
    return array[0];
}
const firstValueFromStringArray = getFirstValueFromArray(['1', '2']);
const firstValueFromNumberArray = getFirstValueFromArray([10, 20]);
// Promise
const returnPromise = () => __awaiter(void 0, void 0, void 0, function* () {
    return 5;
});
// Generics com classes
class GenericNumber {
    constructor(zeroValue, sum) {
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}
const myGenericNumber = new GenericNumber(0, (x, y) => {
    return x + y;
});
