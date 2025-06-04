"use strict";
const user = {
    // ctrl + espaço, ele mostra os atributos que temos
    firstName: "Gabriel",
    age: 20,
    email: "gl930551@gmail.com",
    password: "123",
    orders: [{ productId: '1', price: 200 }],
    register() {
        return "a";
    }
};
const printLog = (message) => {
};
printLog(user.password); // Se colocarmos o '!', dizemos para tirar o underfined do password (pq ele é opcional, entao pode ser indefinido).
// Definindo assim, dizemos que o author tem tanto as propriedades do Author e do User;
const author = {
    age: 2,
    books: ['Teste', 'Gabriel'],
    email: 'author@gmail.com',
    firstName: 'Gabriel',
    orders: [],
    register() {
        return "a";
    }
};
;
const emailUser = {
    email: "gabriel@gmail.com",
    firstName: "Gabriel",
    login() {
        return "a";
    },
};
;
const newAuthor = {
    email: 'author@Gmail.com',
    firstName: "Gabriel",
    books: [],
    login() {
        return "a";
    },
};
const grade = 1;
