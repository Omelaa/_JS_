//
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
// function argumentsSum() {
//     let sum = '';
//     let result = [];
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments.length === [0]) {
//             sum += arguments[i];
//             result = sum;
//         } else if (arguments.length > [0]) {
//             sum += ` ${arguments[i]} `;
//             result = sum;
//         }
//     }
//     return result;
// }
//
// console.log(argumentsSum('привет', 'ку', 'я сырник'));

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

let twoArr = [1, 2, 3, 4];
let oneArr = [2, 3, 4, 5];
let newArr = [];

function sumArr(firstArr, secondArr, arr) {
    let sum;
    for (const firstArrKey in firstArr) {
        for (const secondArrKey in secondArr) {
            if (firstArrKey === secondArrKey) {
                sum = firstArr[firstArrKey] + secondArr[secondArrKey];
                arr.push(sum);
            }
        }
    }
    return arr;
}

console.log(sumArr(oneArr, twoArr, newArr));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let objKey = [
//     {name: 'Dima', age: 13}, {model: 'Camry'}
// ];
//
// let mass = [];
//
// function keys(arr, newArr) {
//     newArr = [];
//     for (let item of arr) {
//         for (let key in item) {
//             newArr.push(key);
//         }
//     }
//     return newArr;
// }
//
//
// console.log(keys(objKey, mass));


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let objKey = [
    {name: 'Dima', age: 13}, {model: 'Camry'}
];

let mass = [];

function keys(arr, newArr) {
    newArr = [];
    for (let item of arr) {
        for (let key in item) {
            newArr.push(item[key]);
        }
    }
    return newArr;
}


console.log(keys(objKey, mass));
