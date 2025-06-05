// Interface da class Person, geralmente, para se referenciar a uma class, colocamos o I na frente
interface IPerson {
    id: number;
    sayMyName(): string;
}

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
class Person implements IPerson {
    readonly id: number; // parametro readonly faz com que vc nao consiga modificar esse atributo dps da criação do objeto
    protected name: string; // protected readonly faz com que a variavel só consigar ser acessada dentro da sua classe ou da subclasse, nao podendo fazer um gabriel.name; por exemplo.
    private age: number; // private só pode ser acessada dentro dessa classe

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayMyName(): string {
        return this.name;
    }
}

// Criando outra classe para exemplificar uma maneira diferente
// Mesma coisa que acima
class PersonRefact {
    constructor(
        readonly id: number,
        protected name: string,
        private age: number
    ) {}
}
class Employee extends Person {
    constructor(id: number, name: string, age: number) {
        super(id, name, age);
    }

    whoAmI() {
        // 'return this.age;' isso nao funciona pq o age é private, só podendo ser acessado pela classe dele msm
        return this.name; // esse funciona, pois recebe o parametro protrected, podendo ser acessivel tanto pela classe Pai e tanto pela subclasse
    }
}

const gabriel = new Person(1, "Gabriel", 21);