// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('Введите число от 0 до 59', '');
//
// if (time > 0 && time <= 15) {
//     document.write('<h1>1/4</h1>');
// } else if (time > 15 && time <= 30) {
//     document.write('<h2>2/4</h2>');
// } else if (time > 30 && time <= 45) {
//     document.write('<h2>3/4</h2>')
// } else if (time > 45 && time <= 59) {
//     document.write('<h2>4/4</h2>')
// } else {
//     document.write('<h2>Время указано не верно, или поле остается пустым.</h2>')
// }

//
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = +prompt('Введіть число місяця щоб визначити декаду -',' ');
// if (day > 1 && day <= 11) {
//     document.write('<h1>Перша декада</h1>')
// } else if (day > 11 && day <= 21) {
//     document.write('<h2>Друга декада</h2>')
// } else if (day > 21 && day <= 31) {
//     document.write('<h2>Третя декада</h2>')
// } else {
//     document.write('<h2>Число указано неверно, или поле остается пустым.</h2>')
// }

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test1, test2;
// test1 = true;
// test2 = test1 !== true ? 'Вірно' : 'Неправильно';
// console.log(test2);

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = 0;
// let result = a !== 0? 'Вірно' : 'Невірно';
// console.log(result);
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let key = prompt('Напишіть день тиждня на який вам потрібен розклад -', '');

// switch (key) {
//     case 'понеділок':
//         document.write('<h2>Понеділок</h2>');
//         document.write('<h3>- 7.00 - підйом.</h3>');
//         document.write('<h3>- 7.00-8.00 - ранкова зарядка, гігієнічні процедури, сніданок.</h3>');
//         document.write('<h3>- 13.00-17.00 - робота  </h3>');
//         document.write('<h3>- 19.00-20.00 - вечеря..</h3>');
//         document.write('<h3>- 20.00-22.00 - особистий час, сімейні наступного дня.</h3>');
//         document.write('<h3>- 22.00 - відхід до сну.</h3>');
//         break;
//     case 'вівторок':
//         document.write('<h2>Вівторок</h2>');
//         document.write('<h3>- 7.00 - підйом.</h3>');
//         document.write('<h3>- 7.00-8.00 - ранкова зарядка, гігієнічні процедури, сніданок.</h3>');
//         document.write('<h3>- 13.00-17.00 - робота  </h3>');
//         document.write('<h3>- 19.00-20.00 - вечеря..</h3>');
//         document.write('<h3>- 20.00-22.00 - особистий час, сімейні наступного дня.</h3>');
//         document.write('<h3>- 22.00 - відхід до сну.</h3>');
//         break;
//     case 'середа':
//         document.write('<h2>Середа</h2>');
//         document.write('<h3>- 7.00 - підйом.</h3>');
//         document.write('<h3>- 7.00-8.00 - ранкова зарядка, гігієнічні процедури, сніданок.</h3>');
//         document.write('<h3>- 20.00-22.00 - особистий час, сімейні наступного дня.</h3>');
//         document.write('<h3>- 22.00 - відхід до сну.</h3>');
//         break;
//     case 'четверг':
//         document.write('<h2>Четверг</h2>');
//         document.write('<h3>- 7.00 - підйом.</h3>');
//         document.write('<h3>- 7.00-8.00 - ранкова зарядка, гігієнічні процедури, сніданок.</h3>');
//         document.write('<h3>- 13.00-17.00 - робота  </h3>');
//         document.write('<h3>- 22.00 - відхід до сну.</h3>');
//         break;
//     case "п'ятниця":
//         document.write("<h2>П'ятниця</h2>");
//         document.write('<h3>- 7.00 - підйом.</h3>');
//         document.write('<h3>- 7.00-8.00 - ранкова зарядка, гігієнічні процедури, сніданок.</h3>');
//         document.write('<h3>- 19.00-20.00 - вечеря..</h3>');
//         document.write('<h3>- 20.00-22.00 - особистий час, сімейні наступного дня.</h3>');
//         document.write('<h3>- 22.00 - відхід до сну.</h3>');
//         break;
//     case 'субота':
//         document.write('<h2>Субота</h2>');
//         document.write('<h3>- 19.00-20.00 - вечеря..</h3>');
//         document.write('<h3>- 20.00-22.00 - особистий час, сімейні наступного дня.</h3>');
//         document.write('<h3>- 22.00 - відхід до сну.</h3>');
//         break;
//     case 'неділя':
//         document.write('<h2>Неділя</h2>');
//         document.write('<h3>- 19.00-20.00 - вечеря..</h3>');
//         document.write('<h3>- 20.00-22.00 - особистий час, сімейні наступного дня.</h3>');
//         document.write('<h3>- 22.00 - відхід до сну.</h3>');
//         break;
//
//     default:
//         document.write('<h2>Невірно введений день</h2>');
// }


// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let year, answer;
//
// year = +prompt('Скільки днів у вашому році:?')
// answer = year % 4;
//
// if (answer === 0){
//     alert('Цей рік високосний!')
// } else {
//     alert('Цей рік не є високосним!')
// }

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let question = prompt('Яка «офіційна» назва JavaScript?','');
// if (question === 'ECMAScript'){
//     alert('Правильно!!!');
// } else {
//     alert('Не знаєте? Це - ECMAScript!');
// }