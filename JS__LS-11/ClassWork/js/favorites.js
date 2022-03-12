

let favorites = JSON.parse(localStorage.getItem(('users')));

let usersWrap = document.createElement('div');
usersWrap.classList.add('container');
let wrapper = document.createElement('ul')
wrapper.classList.add('users__wrapper')
let a = document.createElement('a');
a.classList.add('link');
a.innerText = 'Назад'
a.href = 'index.html';
for (let user of favorites){
    let userWrap = document.createElement('li');
    userWrap.classList.add('user__wrap');
    let name = document.createElement('h3');
    name.innerText = `Name - ${user.name.charAt(0).toUpperCase() + user.name.slice(1)}`;
    let age = document.createElement('span');
    age.innerText = `Age - ${user.age}`;
    let status = document.createElement('span');
    status.innerText = `Status - ${user.status}`;
    userWrap.append(name, age, status);
    wrapper.append(userWrap);
    usersWrap.append(wrapper, a);
}
document.body.appendChild(usersWrap);
