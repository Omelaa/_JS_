// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let text = document.createElement('id');
// text.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, impedit! <br>';
// text.style.transition = 'opacity 0.5s'
// let button = document.createElement('button');
// button.innerText = 'tap';
// button.onclick = () => {
//     if (text.style.opacity === '1'){
//         text.style.opacity = '0';
//     } else {
//         text.style.opacity = '1';
//     }
// }
//
// document.body.append(text, button);


// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button = document.createElement('button');
// button.innerText = 'hide';
// button.onclick = () => button.style.display = 'none';
// document.body.appendChild(button);


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let formCreate = document.createElement('form');
// let input = document.createElement('input');
// input.setAttribute('type', 'number');
// input.setAttribute('name', 'age');
// let button = document.createElement('button');
// button.innerText = 'touch me!';
// formCreate.append(input, button);
// document.body.appendChild(formCreate);
//
// let form = document.forms[0];
// form.onsubmit = (event) => {
//     event.preventDefault();
//     let age = event.target.age.value;
//     if (age < 18) {
//         alert('Вам немає 18!');
//     } else {
//         alert('Ласкаво просимо!');
//     }
//     event.target.age.value = '';
// };


// - Создайте меню, которое раскрывается/сворачивается при клике
//
// let menu = document.createElement('div');
// menu.innerText = 'Menu';
// menu.style.maxWidth = '250px';
// menu.style.display = 'flex';
// menu.style.flexDirection = 'column';
// let button = document.createElement('button');
// button.innerText = 'button';
// let wrap = document.createElement('div');
// wrap.style.display = 'flex';
// wrap.style.flexDirection = 'column';
// wrap.style.padding = '10px';
// wrap.style.overflow = 'hidden';
//
// for (let i = 0; i <= 5; i++) {
//     let menuItem = document.createElement('a')
//     menuItem.href = '#';
//     menuItem.innerText = 'Item';
//     wrap.appendChild(menuItem);
// }
// menu.append(wrap, button);
// document.body.appendChild(menu);
//
// button.addEventListener('click', (event) => {
//     if (wrap.style.height === '100%') {
//         wrap.style.height = '0px';
//         wrap.style.padding = '0px';
//     } else {
//         wrap.style.height = '100%';
//         wrap.style.padding = '10px';
//     }
// });


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//

// let users = [
//     {title: 'lorem1', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem2', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem3', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem4', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem5', body: 'lorem ipsum dolo sit ameti'},
// ];
//
//
// let list = document.createElement('div');
// list.style.display = 'flex';
// list.style.flexWrap = 'wrap';
// list.style.gridGap = '5px';
// for (let user of users) {
//     let listContainer = document.createElement('div');
//     let userCom = document.createElement('div');
//     userCom.innerText = `${user.title} ${user.body}`;
//     userCom.style.border = '1px solid #000';
//     userCom.style.padding = '5px';
//     let button = document.createElement('button');
//     button.classList.add('button');
//     button.style.padding = '5px 10px';
//     button.innerText = 'Свернуть';
//     button.addEventListener('click', function () {
//         userCom.classList.toggle('active');
//     });
//     listContainer.append(button, userCom);
//     list.appendChild(listContainer);
// }
// document.body.appendChild(list);
