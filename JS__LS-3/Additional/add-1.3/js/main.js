//
// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

// let arr = [];
//
// for (let i = 0; i < 50; i++) {
//     if (i % 2 === 0) {
//         arr.push(i);
//     }
// }
// console.log(arr);

//     b. заповнити його 50 непарними числами за допомоги циклу.

// let arr = [];
//
// for (let i = 0; i < 50; i++) {
//     if (i % 2 === 1) {
//         arr.push(i);
//     }
// }
// console.log(arr);

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// let arr = [];
//
// for (let i = 0; i < 20; i++) {
//     let random = Math.floor(Math.random() * i);
//     arr.push(random);
// }
// console.log(arr);


// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let arr = [];
//
// for (let i = 0; i < 20; i++) {
//     let random = Math.floor(Math.random() * (732) + 8);
//     arr.push(random);
// }
//
// console.log(arr);

// 2. Вивести за допомогою console.log кожен третій елемен

// for (let i = 0; i < arr.length; i = i + 3) {
//         console.log(arr[i]);
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// for (let i = 0; i < arr.length; i = i + 3) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let newArr = [];
//
// for (let i = 0; i < arr.length; i = i + 3) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//         newArr.push(arr[i]);
//     }
// }
//
// console.log(newArr);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним

// let arr = [1, 2, 3, 5, 7, 9, 56, 8, 67];
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let arr = [100, 250, 50, 168, 120, 345, 188];
//
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum / arr.length);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let arr = [];
//
// for (let i = 0; i < 10; i++) {
//     let random = Math.floor(Math.random() * i);
//     let newArr = [];
//     newArr.push(random);
//     for (let num of newArr) {
//         num *= 5;
//         arr.push(num);
//     }
// }
// console.log(arr);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let arr = [10, 20, 30, true, false, 'string', 'notAss'];
// let newArr = [];
// for (let item of arr){
//     if (typeof item === 'number'){
//         newArr.push(item);
//     }
// }
// console.log(newArr);

//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//

// let userBlock = (usersWithId, citiesWithId) => {
//     let address;
//     for (let user of usersWithId) {
//         for (let city of citiesWithId) {
//             if (user.id === city.user_id) {
//                 address = city;
//                 console.log(user, city);
//             }
//         }
//     }
// };
// userBlock(usersWithId, citiesWithId);


//
//
//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.


// let arr = [1, 23, 3, 4, 2, 6, 7, 8, 12, 10, 18, 12, 13, 14, 15];
//  for (let num of arr){
//      if (num%2 === 0){
//          console.log(num);
//      }
//  }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let arr = [1, 23, 3, 4, 2, 6, 7, 8, 12, 10];
// let newArr = [];
// for (let num of arr){
//      newArr.push(num);
//  }
//
// console.log(newArr);

//
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let arr = ['a', 'b', 'c'];
// let newArr = [];
//
// for (let i = 0; i < arr.length; i++) {
//     newArr += arr[i];
// }
//
// console.log(newArr);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let arr = ['a', 'b', 'c'];
// let newArr = [];
// let i = 0;
//
// while (i < arr.length) {
//     newArr += arr[i];
//
//     i++
// }
//
// console.log(newArr);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let arr = ['a', 'b', 'c'];
// let newArr = [];
//
// for (let item of arr) {
//     newArr += item;
// }
//
// console.log(newArr);
