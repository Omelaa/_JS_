// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

// let p = document.getElementById('content');
// console.log(p.innerText);

// -- отримує текст з блоку з id "rules"

// let rulesText = document.getElementById('rules');
// console.log(rulesText.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший

// let p = document.getElementById('content');
// p.innerText = 'Кукуха';
// console.log(p.innerText);

// -- замініть текст параграфа з id 'rules' на будь-який інший

// let rulesText = document.getElementById('rules');
// rulesText.innerText = 'Кукуха 2';
// console.log(rulesText.innerText);

// -- змініть кожному елементу колір фону на червоний

// let colorList = document.body.children;
// for (let item of colorList){
//     item.style.background = 'red';
// }

// -- змініть кожному елементу колір тексту на синій

// let colorList = document.body.children;
// for (let item of colorList){
//     item.style.color = 'blue';
// }

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

// let classOfRules = document.getElementById('rules');
// console.log(classOfRules.classList);


// -- поміняти колір тексту у всіх елементів fc_rules на червоний

// let fcRul = document.getElementsByClassName('fc_rules');
// for (let item of fcRul) {
//     item.style.color = 'red';
// }