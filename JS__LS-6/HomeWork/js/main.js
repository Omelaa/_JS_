// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let arr = ['hello world', 'lorem ipsum', 'javascript is cool'];
//
// for (let str of arr) {
//     console.log(str.length);
// }

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let arr = ['hello world', 'lorem ipsum', 'javascript is cool'];
//
// for (let str of arr) {
//     console.log(str.toUpperCase());
// }

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let arr = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
//
// for (let str of arr) {
//     console.log(str.toLowerCase());
// }

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.trim());

//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать';
//
// let stringToArray = (str) => str.split(' ');
//
// console.log(stringToArray(str));

//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
//
// let delete_characters = (str, length) => str.substring(0, length);
//
// document.writeln(delete_characters(str, 7));

//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
//
// let insertDash = (str) => str.replaceAll(' ', '-').toUpperCase();
//
// console.log(insertDash(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let strUp = (word) => word.charAt(0).toUpperCase() + word.slice(1);
//
// console.log(strUp('привет'));

//
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let capitalize = (str) => {
//     let item = str.split(' ');
//     let bigNum = [];
//     for (let num of item) {
//         if (num !== num.toLowerCase()) {
//             bigNum += num + ' ';
//         }
//     }
//     return bigNum;
// }
//
// console.log(capitalize('Привет Мир! Я Ваня и я один дома!'));

