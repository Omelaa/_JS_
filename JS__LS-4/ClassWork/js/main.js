// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function minNum(a, b, c) {
//     let min;
//     if (a < b && a < c) {
//         min = a;
//     } else if (b < c) {
//         min = b;
//     } else {
//         min = c;
//     }
//     console.log(min);
// }
//
// minNum(2560, 1000, 500)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maxNum(a, b, c) {
//     let max;
//     if (a > c && a > b) {
//         max = a;
//     } else if (c > b) {
//         max = c;
//     } else {
//         max = b;
//     }
//     console.log(max);
// }
//
// maxNum(10, 5000, 1000)

// - створити функцію яка повертає найбільше число з масиву


// let arr = [0, 1000, 529, -78, 89.7, 1243, 2000, 300000];
//
// function arrBig(arr) {
//     let max = arr[0];
//    for (let item of arr){
//        if (item > max) {
//            max = item;
//        }
//    }
//    return max;
// }
//
// console.log(arrBig(arr));

// - створити функцію яка повертає найменьше число з масиву


// let arr = [0, 1000, 529, -2, 89.7, 1243, 2000, 300000];
//
// function minArr(arr){
//     let min = arr[0];
//     for (let item of arr){
//         if (item < min){
//             min = item;
//         }
//     }
//     return min;
// }
//
// console.log(minArr(arr))


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [1, 2, 10];
//
// function mathArr(arr) {
//     let sum = 0;
//     for (let item of arr) {
//         sum += item;
//     }
//     return sum;
// }
//
// console.log(mathArr(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr = [0, 2000, 529, -2, 89.7, 1243, 2000, 300000];
//
// function arifArr(arr) {
//     let sum = 0;
//     for (let item of arr){
//         (sum += item / 2);
//     }
//     return sum;
// }
//
// console.log(arifArr(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


// let arr = [0, 5, 2000, 529, -2, 89.7, 1243, 2000, 300000];
//
// function minMaxArr(arr) {
//     let min = arr[0];
//     let max = arr[0];
//     for (let item of arr) {
//         if (item > max) {
//             max = item;
//         }
//         if (item < min) {
//             min = item;
//         }
//     }
//     console.log(max);
//     return min;
// }
//
// console.log(minMaxArr(arr));


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let arr = [0];
//
// function randomArr(arr) {
//     for (let i = 0; i <= 100; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//     }
//     return arr;
// }
//
// console.log(randomArr(arr));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let mass = [];
//
// function randomArr(arr, limit) {
//     for (let i = 0; i <= limit; i++) {
//         arr[i] = Math.round(Math.random() * limit);
//     }
//     return arr;
// }
//
// console.log(randomArr(mass, 20));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// let mass = [1, 2, 3];
//
// function reverseArr(arr) {
//     return arr.reverse();
// }
//
// console.log(reverseArr(mass));


