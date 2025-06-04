// Type
// type é basicamente um objeto que podemos definir suas propriedades e os tipos dessas propriedas]
type Order = {
    productId: string,
    price: number
};

type User = {
    firstName: String
    age: number, 
    email: string, 
    password?: string, // Se colocarmos o '?', podemos definir que esse atributo é OPCIONAL, ou seja, pode ser NULL!
    orders: Order[],
    register(): string
};

const user: User = {
    // ctrl + espaço, ele mostra os atributos que temos
    firstName: "Gabriel",
    age: 20,
    email: "gl930551@gmail.com",
    password: "123",
    orders: [{productId: '1', price: 200}],
    register () {
        return "a";
    }
};

const printLog = (message: string) => {

}
printLog(user.password!); // Se colocarmos o '!', dizemos para tirar o underfined do password (pq ele é opcional, entao pode ser indefinido).

// Unions 

type Author = {
    books: string[]
};

// Definindo assim, dizemos que o author tem tanto as propriedades do Author e do User;
const author: Author & User = { 
    age: 2,
    books: ['Teste', 'Gabriel'],
    email: 'author@gmail.com',
    firstName: 'Gabriel',
    orders: [], 
    register() {
        return "a"
    }
};

// Interfaces
interface UserInterface {
    // readonly pode ser usado nas interfaces e define que é apenas para leitura.
    readonly firstName: string, // Sendo assim, criamos o objeto porem apos sua criação, ele nao pode mais ser alterado
    email: string,
    login(): string;
};

const emailUser: UserInterface = {
    email: "gabriel@gmail.com",
    firstName: "Gabriel",
    login() {
        return "a";
    },
};

interface AuthorInterface {
    books: string[]
};

const newAuthor: UserInterface & AuthorInterface = {
    email: 'author@Gmail.com',
    firstName: "Gabriel",
    books: [],
    login() {
        return "a";
    },
};

type Grade = number | string;
const grade: Grade = 1;
