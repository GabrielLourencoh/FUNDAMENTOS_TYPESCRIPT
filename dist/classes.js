"use strict";
// Criando uma classe basica
// class Person {
//     id: number;
//     name: string;
//     age: number;
//     constructor(id: number, name: string, age: number) {
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
//     sayMyName(): string {
//         return this.name;
//     }
// }
// Criando a classe com uma interface pra ela
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    sayMyName() {
        return this.name;
    }
}
// Criando outra classe para exemplificar uma maneira diferente
// Mesma coisa que acima
class PersonRefact {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
class Employee extends Person {
    constructor(id, name, age) {
        super(id, name, age);
    }
    whoAmI() {
        // 'return this.age;' isso nao funciona pq o age é private, só podendo ser acessado pela classe dele msm
        return this.name; // esse funciona, pois recebe o parametro protrected, podendo ser acessivel tanto pela classe Pai e tanto pela subclasse
    }
}
const gabriel = new Person(1, "Gabriel", 21);
