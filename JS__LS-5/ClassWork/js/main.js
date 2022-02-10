// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let maxMin = (a, b, c) => {
//     let min = 0;
//     if ((a < b) && (a < c)) {
//         min = a;
//         console.log(min);
//     } else if ((b < a) && (c > b)) {
//         min = b;
//         console.log(min)
//     } else if ((c < a) && (b > c)) {
//         min = c;
//         console.log(min)
//     }
// };
//
// maxMin(15, 50, 35);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let minMax = (a, b, c) => {
//     let max = 0;
//     if ((a > b) && (a > c)) {
//         max = a;
//         console.log(max);
//     } else if ((b > a) && (c < b)) {
//         max = b;
//         console.log(max)
//     } else if ((c > a) && (b < c)) {
//         max = c;
//         console.log(max)
//     }
// };
//
// minMax(15, 750, 355);

// - створити функцію яка повертає найбільше число з масиву

// let mass = [1, 10, 500, 300, 200, 1000];
//
// let bigNumOfArr = (arr) => {
//     let max = [0];
//     for (let num of arr) {
//         if (num > max) {
//             max = num;
//         }
//     }
//     return max;
// }
//
// console.log(bigNumOfArr(mass));

// - створити функцію яка повертає найменьше число з масиву

// let mass = [20, 10, 500, 300, 200, -1, 1000];
//
// let bigNumOfArr = (arr) => {
//     let min = [0];
//     for (let num of arr) {
//         if (num < min) {
//             min = num;
//         }
//     }
//     return min;
// }
//
// console.log(bigNumOfArr(mass));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let mass = [1, 2, 10];
//
// let arrSum = (arr) => {
//     let sum = 0;
//     for (let num of arr) {
//         sum += num;
//     }
//     return sum;
// };
//
// console.log(arrSum(mass));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr = [548, 124, 100, 350];
//
// let areArr = (arr) => {
//     let sum = 0;
//     for (let item of arr) {
//         sum += item / 2;
//     }
//     return sum;
// }
//
// console.log(areArr(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let arr = [548, 124, 10, 50, 3265];
//
// let maxMin = (arr) => {
//     let max = arr[0];
//     let min = arr[0];
//     for (let item of arr){
//         if(item > max){
//             max = item;
//         }
//         if (item < min){
//             min = item;
//         }
//     }
//     console.log(max);
//     return min;
// }
//
// console.log(maxMin(arr));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let arr = [];
//
// let randomArr = (randomArr) => {
//     for (let i = 0; i <= 20; i++){
//         arr[i] = Math.round(Math.random()*100);
//     }
//     return arr;
// }
//
// console.log(randomArr(arr));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let arr = [];
//
// let randomArr = (arr, limit) => {
//     for (let i = 0; i <= 20; i++) {
//         arr[i] = Math.round(Math.random() * limit);
//     }
//     return arr;
// }
//
// console.log(randomArr(arr, 200));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let arr = [1, 2, 3];
//
// let arrReverse = (arr) => {
//     let arr1 = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         arr1.push(arr[i]);
//     }
//     return arr1;
// }
// console.log(arrReverse(arr));


