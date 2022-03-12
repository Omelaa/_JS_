// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'max', age: 31, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

function favoritesUsers(arr) {
    let usersWrap = document.createElement('div');
    usersWrap.classList.add('container');
    let wrapper = document.createElement('ul')
    wrapper.classList.add('users__wrapper')
    let a = document.createElement('a');
    a.classList.add('link');
    a.innerText = 'Перейти'
    a.href = 'favorites.html';
    for (const user of arr) {
        let userWrap = document.createElement('li');
        userWrap.classList.add('user__wrap');
        let button = document.createElement('button');
        button.innerText = 'add to favorites';
        let name = document.createElement('h3');
        name.innerText = `Name - ${user.name.charAt(0).toUpperCase() + user.name.slice(1)}`;
        let age = document.createElement('span');
        age.innerText = `Age - ${user.age}`;
        let status = document.createElement('span');
        status.innerText = `Status - ${user.status}`;
        userWrap.append(name, age, status, button);
        wrapper.append(userWrap);
        usersWrap.append(wrapper, a);
        button.onclick = function () {
            let userForNextPage = {
                name: user.name,
                age: user.age,
                status: user.status,
            }
            let arr = JSON.parse(localStorage.getItem('users')) || [];
            arr.push(userForNextPage);
            localStorage.setItem('users', JSON.stringify(arr));
        }
    }
    document.body.appendChild(usersWrap);
}

favoritesUsers(users);