//
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function calc(a, b) {
//     return a * b;
// }
//
// console.log(calc(10, 10));


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circ(a) {
//     return Math.floor(Math.PI * a ** 2);
// }
//
// console.log(circ(5))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cylinder(r, h) {
//     let PI = 2 * Math.PI;
//     return PI * r * h + PI * r ** 2;
// }
//
// console.log(cylinder(10, 10))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let mass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// function array(arr){
//     for (let item of arr){
//         console.log(item);
//     }
// }
//
// array(mass);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph(p){
//     document.write(`<p>${p}</p>`);
// }
//
// paragraph('Okten');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list(liText) {
//     document.write('<ul>');
//     document.write(`<li>${liText}</li>`)
//     document.write(`<li>${liText}</li>`)
//     document.write(`<li>${liText}</li>`)
//     document.write('</ul>');
// }
//
// list('hello mentor!')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


// function list(liText, liNum) {
//     document.write('<ul>');
//     for (let i = 0; i <= liNum; i++) {
//         document.write(`<li>${liText}</li>`)
//     }
//     document.write('</ul>');
// }
//
// list('hello mentor!', 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let mass = [true, false, 10, 'string', '500', 'okten'];
//
// function array(arr, arrNumb) {
//     document.write('<ul>');
//     for (let i = 0; i <= arrNumb; i++) {
//         let item = arr[i];
//         document.write(`<li>${item}</li>`)
//     }
//     document.write('</ul>');
// }
//
//
// array(mass, 5);

//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let user = [
//     {
//         id: 10,
//         name: 'name',
//         age: 18
//     },
//     {
//         id: 11,
//         name: 'name',
//         age: 15
//     },
//     {
//         id: 12,
//         name: 'name',
//         age: 14
//     },
//     {
//         id: 13,
//         name: 'name',
//         age: 20
//     }];
//
// function arrayUsers(arr) {
//     document.write('<ul>');
//     for (let user of arr) {
//         document.write(`<li>`)
//         document.write(`<div>${user.id}</div>`)
//         document.write(`<div>${user.name}</div>`)
//         document.write(`<div>${user.age}</div>`)
//         document.write(`</li>`)
//     }
//     document.write('</ul>');
// }
//
// arrayUsers(user);


