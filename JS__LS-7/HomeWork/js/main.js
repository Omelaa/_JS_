// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User (id, name, surname, email, phone) {
//
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// };
//
// let usersArr = [
//     new User(1, 'Ivan', 'Omela', 'perd@mail.ua', '+38065652145'),
//     new User(2, 'Ivan', 'Omela', 'perd@mail.ua', '+38065652145'),
//     new User(3, 'Ivan', 'Omela', 'perd@mail.ua', '+38065652145'),
//     new User(4, 'Ivan', 'Omela', 'perd@mail.ua', '+38065652145'),
//     new User(5, 'Ivan', 'Omela', 'perd@mail.ua', '+38065652145'),
//     new User(6, 'Ivan', 'Omela', 'perd@mail.ua', '+38065652145'),
//     new User(7, 'Ivan', 'Omela', 'perd@mail.ua', '+38065652145'),
//     new User(8, 'Ivan', 'Omela', 'perd@mail.ua', '+38065652145'),
//     new User(9, 'Ivan', 'Omela', 'perd@mail.ua', '+38065652145'),
//     new User(10, 'Ivan', 'Omela', 'perd@mail.ua','+38065652145')
// ];
// console.log(usersArr);


//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let userFilter = usersArr.filter(user => user.id%2 === 0);
// console.log(userFilter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let userSort = usersArr.sort((a, b) => b.id - a.id);
// console.log(userSort);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// function Client(id, name, surname, email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// };
//
// let clients = [
//     new Client(1, 'Ivan', 'Omela', 'Ogm@mail.ua', '+8-800-555-3535', ['apple', 'frog', 'grape', 'milk']),
//     new Client(2, 'Ivan', 'Omela', 'Ogm@mail.ua', '+8-800-555-3535', ['apple', 'frog', 'grape', 'milk', 'grape', 'milk', 'grape', 'milk']),
//     new Client(3, 'Ivan', 'Omela', 'Ogm@mail.ua', '+8-800-555-3535', ['apple', 'frog', 'grape', 'milk']),
//     new Client(4, 'Ivan', 'Omela', 'Ogm@mail.ua', '+8-800-555-3535', ['apple', 'frog', 'grape', 'milk']),
//     new Client(5, 'Ivan', 'Omela', 'Ogm@mail.ua', '+8-800-555-3535', ['apple', 'frog', 'grape', 'milk', 'frog', 'grape', 'milk']),
//     new Client(6, 'Ivan', 'Omela', 'Ogm@mail.ua', '+8-800-555-3535', ['apple', 'frog', 'grape', 'milk']),
//     new Client(7, 'Ivan', 'Omela', 'Ogm@mail.ua', '+8-800-555-3535', ['apple', 'frog', 'grape', 'milk', 'grape', 'milk']),
//     new Client(8, 'Ivan', 'Omela', 'Ogm@mail.ua', '+8-800-555-3535', ['apple', 'frog', 'grape', 'milk']),
//     new Client(9, 'Ivan', 'Omela', 'Ogm@mail.ua', '+8-800-555-3535', ['apple', 'frog', 'grape', 'milk']),
//     new Client(10, 'Ivan', 'Omela', 'Ogm@mail.ua', '+8-800-555-3535', ['apple', 'frog', 'grape', 'milk'])
// ];
//
// console.log(clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

//
// let sortClients = clients.sort((a,b) => a.order.length - b.order.length);
// console.log(sortClients);
//

