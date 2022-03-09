// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let wrapper = document.createElement('div');
// wrapper.style.display = 'flex';
//
// let firstForm = document.createElement('form');
// firstForm.setAttribute('id', 'firstForm');
// let firstFormFirstInput = document.createElement('input');
// firstFormFirstInput.setAttribute('name', 'name');
// let firstFormSecondInput = document.createElement('input');
// firstFormSecondInput.setAttribute('name', 'username');
//
// let secondForm = document.createElement('form');
// secondForm.setAttribute('id', 'secondForm');
// let secondFormFirstInput = document.createElement('input');
// secondFormFirstInput.setAttribute('name', 'phone');
// let secondFormSecondInput = document.createElement('input');
// secondFormSecondInput.setAttribute('name', 'email');
//
// let button = document.createElement('button');
// button.setAttribute('type', 'submit');
// button.innerText = 'Submit';
//
// firstForm.append(firstFormFirstInput, firstFormSecondInput);
// secondForm.append(secondFormFirstInput, secondFormSecondInput);
// wrapper.append(firstForm, secondForm, button);
// document.body.appendChild(wrapper);
//
// let userInfo = document.forms;
//
// button.addEventListener('click', function () {
//     let user = {
//         name: document.forms.firstForm.name.value,
//         username: document.forms.firstForm.username.value,
//         phone: document.forms.secondForm.phone.value,
//         email: document.forms.secondForm.email.value,
//     };
//     console.log(user);
// });

//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

//
// let mainForm = document.createElement('form');
// let inputOne = document.createElement('input');
// inputOne.setAttribute('type', 'number');
// let inputTwo = document.createElement('input');
// inputTwo.setAttribute('type', 'number');
// let inputThree = document.createElement('input');
// let inputButton = document.createElement('button');
// inputButton.innerText = 'Створити таблицю';
//
// mainForm.append(inputOne, inputTwo, inputThree);
// document.body.append(mainForm, inputButton);
//
//
// inputButton.addEventListener('click', function (event) {
//     let inputWidth = inputOne.value;
//     let inputHeight = inputTwo.value;
//     let inputText = inputThree.value;
//
//     function table(inputWidth, inputHeight, inputText) {
//         let table = document.createElement('table');
//         table.style.border = '1px solid #000000'
//         for (let i = 0; i < inputWidth; i++) {
//             let width = document.createElement('tr');
//             width.style.border = '1px solid #000000';
//             table.append(width);
//             for (let i = 0; i < inputHeight; i++) {
//                 let height = document.createElement('td');
//                 height.style.border = '1px solid #000000'
//                 height.innerText = `${inputText}`;
//                 table.append(height);
//             }
//         }
//         document.body.appendChild(table);
//     }
//
//     table(inputWidth, inputHeight, inputText);
// });


//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//

//
// let arr = ['жопа', 'ass'];
//
// let formCreate = document.createElement('form')
// let input = document.createElement('input');
// input.setAttribute('type', 'text');
// input.setAttribute('name', 'text');
// let button = document.createElement('button');
// button.setAttribute('type', 'submit');
// button.innerText = 'submit';
//
// formCreate.append(input, button);
// document.body.appendChild(formCreate);
//
// let form = document.forms[0];
//
// form.onsubmit = function (e) {
//     e.preventDefault();
//     arr.forEach((item) => {
//         if (e.target.text.value.toLowerCase().includes(item)) {
//             alert('stop!');
//         }
//     });
//     e.target.text.value = '';
// };


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//

// let arr = ['жопа', 'ass'];
//
// let formCreate = document.createElement('form')
// let input = document.createElement('input');
// input.setAttribute('type', 'text');
// input.setAttribute('name', 'text');
// let button = document.createElement('button');
// button.setAttribute('type', 'submit');
// button.innerText = 'submit';
//
// formCreate.append(input, button);
// document.body.appendChild(formCreate);
//
// let form = document.forms[0];
//
// form.onsubmit = (e) => {
//     e.preventDefault();
//     arr.forEach((item) => {
//         if (e.target.text.value.toLowerCase().includes(item)) {
//             alert('В предложении есть плохие слова!')
//         }
//     });
//     e.target.text.value = '';
// };