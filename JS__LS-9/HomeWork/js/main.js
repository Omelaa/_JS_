// Все робити за допомоги js.
// - створити блок,
// let block = document.createElement('div');
// //     - додати йому класи wrap, collapse, alpha, beta
// block.classList.add('wrap', 'collapse', 'alpha', 'beta');
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// block.style.background = 'red';
// block.style.color = 'red';
// block.style.fontSize = '22';
// // - додати цей блок в body.
// document.body.appendChild(block);
// // - клонувати його повністю, та додати клон в body.
// let blockClone = block.cloneNode();
// document.body.appendChild(blockClone);
//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let menu = document.getElementsByClassName('menu')[0];

// let header = ['Main', 'Products', 'About us', 'Contacts'];

// for (let head of header) {
//     let headItem = document.createElement('li');
//     headItem.innerText = `${head}`;
//     headItem.classList.add('menu_item');
//     menu.appendChild(headItem);
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// for (const item of coursesAndDurationArray) {
//     let blockItem = document.createElement('div');
//     let h2 = document.createElement('h2');
//     h2.innerText = `${item.title} - ${item.monthDuration}`
//     blockItem.appendChild(h2);
//     document.body.appendChild(blockItem);
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'>
// з monthDuration елементу.
//     Завдання робити через цикли.


// for (let item of coursesAndDurationArray){
//     let classItem = document.createElement('div');
//     classItem.classList.add('item');
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     h1.innerText = `${item.title}`;
//     let p = document.createElement('p');
//     p.classList.add('description');
//     p.innerText = `${item.monthDuration}`;
//     classItem.append(h1, p);
//     document.body.appendChild(classItem);
// }
