//
//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

// let mainClass = document.getElementById('main_header');
// mainClass.className = 'dec-2022-full';


// b) робить шириниу елементу ul 400px

// let ulWidth = document.getElementsByTagName('ul');
// for (let item of ulWidth){
//     item.style.maxWidth = '400px';
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let linkList = document.getElementsByClassName('linkList');
// for (let item of linkList) {
//     item.style.maxWidth = '50%';
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// let listText = document.getElementsByClassName('listElement2');
// listText[0].getElementsByTagName('a');
// console.log(listText[0].innerText);

// e) отримує всі елементи li та змінює ім колір фону на сірий

// let liBg = document.getElementsByTagName('li');
// for (let li of liBg) {
//     li.style.background = 'gray';
// }

// f) отримує всі елементи 'a' та додає їм клас anchor

// let aNewClass = document.getElementsByTagName('a');
// for (let a of aNewClass){
//     a.className = 'anchor';
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let a40Px = document.getElementsByTagName('a');
// for (let a of a40Px){
//     if (a.innerText === 'link3'){
//         a.style.fontSize = '40px';
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let aXXX = document.getElementsByTagName('a');
//
// for (let a of aXXX){
//     a.className = `${a.innerText}`;
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let color = prompt('Введите цвет - ', '');
//
// let subHeader = document.getElementsByClassName('sub-header');
//
// for (let header of subHeader){
//     header.style.backgroundColor = `${color}`;
// }


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let color = prompt('Введите цвет - ', '');
//
// let subHeader = document.getElementsByClassName('sub-header');
//
// for (let header of subHeader){
//     if (header.innerText === 'content 2 segment'){
//         header.style.backgroundColor = `${color}`;
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let anyText = prompt('Введите text - ', '');
//
// let content = document.getElementsByClassName('content_1');
//
// for (let item of content){
//     item.innerText = `${anyText}`;
// }


// l) отримати елементи p та змінити їм padding на 20px

// let p20px = document.getElementsByTagName('p');
// for (let p of p20px){
//     p.style.padding = '20px';
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let pText = document.getElementsByClassName('text2');
// for (let p of pText){
//     p.innerText = 'dec-2021-full';
// }

