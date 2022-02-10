// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою

// let calc = (a, b) => a * b;
// console.log(calc(10, 20));

// - створити функцію яка обчислює та повертає площу кола

// let circ = (a)=> Math.PI * Math.pow(a, 2);
// console.log(circ(10));

// - створити функцію яка обчислює та повертає площу циліндру

// let cylinder = (r, h) => 2 * Math.PI * r * h + 2 * Math.PI * Math.pow(r,2);
// console.log(cylinder(10, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let mass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// let allArr = (arr) => {
//     for (let item of arr){
//         console.log(item);
//     }
// };
//
// allArr(mass);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let anyText = (p) => document.write(`<p>${p}</p>`);
// anyText('Privет');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let list = (liText) => {
//     document.write(`<ul>`);
//     document.write(`<li>${liText}</li>`);
//     document.write(`<li>${liText}</li>`);
//     document.write(`<li>${liText}</li>`);
//     document.write(`</ul>`);
// };
//
// list('Hello world!');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let customList = (liText, liNum) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < liNum; i++){
//         document.write(`<li>${liText}</li>`);
//     }
//     document.write(`</ul>`);
// };
//
// customList('Hello world!', 20);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let mass = [1, 2, true, false, 'string'];
//
// let customList = (arr) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`);
//     }
//     document.write(`</ul>`);
// };
//
// customList(mass);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let arrObj = [
    {
        id: 1,
        name: 'Viktor',
        age: 11
    }, {
        id: 2,
        name: 'Vektor',
        age: 18
    }, {
        id: 3,
        name: 'Veka',
        age: 23
    }, {
        id: 4,
        name: 'Omela',
        age: 33
    }
]

let extractor = (arr) => {
    for (let item of arr) {
        document.write(`<ul>`);
        for (let key in item) {
            document.write(`<li>${key} - ${item[key]}</li>`);
        }
        document.write(`</ul>`);
    }
}

extractor(arrObj);