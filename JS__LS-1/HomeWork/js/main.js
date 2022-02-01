// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// let hello = 'hello';
// console.log(hello);
// alert(hello);
// document.write("<h1>hello</h1>");

// let owu = 'owu';
// console.log(owu);
// alert(owu);
// document.write("<h2>owu</h2>");
//
// let com = 'com';
// console.log(com);
// alert(com);
// document.write("<h3>com</h3>");
//
// let ua = 'ua';
// console.log(ua);
// alert(ua);
// document.write("<h3>ua</h3>");
//
// let one = '1';
// console.log(one);
// alert(one);
// document.write("<h3>1</h3>");
//
// let ten = '10';
// console.log(ten);
// alert(ten);
// document.write("<h3>10</h3>");
//
// let minus = '-999';
// console.log(minus);
// alert(minus);
// document.write("<h3>-999</h3>");
//
// let oneTwoThree = '123';
// console.log(oneTwoThree);
// alert(oneTwoThree);
// document.write("<h3>123</h3>");
//
// let threePoint = '3.14';
// console.log(threePoint);
// alert(threePoint);
// document.write("<h3>3.14</h3>");
//
// let twoPoint = '2.7';
// console.log(twoPoint);
// alert(twoPoint);
// document.write("<h3>2.7</h3>");
//
// let sixteen = '16';
// console.log(sixteen);
// alert(sixteen);
// document.write("<h3>16</h3>");
//
// let yes = 'true';
// console.log(yes);
// alert(yes);
// document.write("<h3>yes</h3>");
//
// let no = 'false';
// console.log(no);
// alert(no);
// document.write("<h3>false</h3>");
//

// - Переприсвоїти кожній змінній з завдання значення на довільне.

// hello = 'reverse-hello';
// console.log(hello)
//
// owu = 'reverse-owu';
// console.log(owu);
//
// com = 'reverse-com';
// console.log(com);
//
// ua = 'reverse-ua';
// console.log(ua);
//
// one = 'reverse-1';
// console.log(one);
//
// ten = 'reverse-10';
// console.log(ten);
//
// minus = 'reverse-999';
// console.log(minus);
//
// oneTwoThree = 'reverse-123';
// console.log(oneTwoThree);
//
// threePoint = 'reverse-3.14';
// console.log(threePoint);
//
// twoPoint = 'reverse-2.7';
// console.log(twoPoint);
//
// sixteen = 'reverse-16';
// console.log(sixteen);
//
// yes = 'reverse-true';
// console.log(yes);
//
// no = 'reverse-false';
// console.log(no);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

// let firstName = 'Ivan';
// let middleName = 'Ostap';
// let lastName = 'Alexandrovich';
//
// let person = `${firstName} ${middleName} ${lastName}`;
//
// console.log(person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
//
// let firstName = prompt ('Ваше имя?',)
// let lastName = prompt ('Ваше отчество?',)
// let age = prompt ('Сколько вам лет?',)
//
// alert(`Вітаю ${firstName} ${lastName}. Тобі ${age} років!)`)



// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100;
// console.log(typeof a) - number
// let b = '100';
// console.log(typeof b) - string
// let c = true;
// console.log(typeof c) - boolean



// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

// console.log(5 < 6);
// console.log(5 > 6);
// console.log(5 == 6);
// console.log(5 === 6);
// console.log(10 == 10);
// console.log(10 === 10);
// console.log(10 > 10);
// console.log(10 < 10);
// console.log(10 != 10);
// console.log(123 === '123');
// console.log(123 == '123');


///////////////////////7\\\\\\\\\\\\\\\\\\\\\\\\\\\

//
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// // 20 як строка додається до 5 тому дорівнює 205
// document.write(str - a + "<br/>");
// // У 20 віднімається 5 тому буде 15
// document.write(str * "2" + "<br/>");
// // У 20 збільшується в 2 рази тому буде 40
// document.write(str / 2 + "<br/>");
// // У 20 зменшується в 2 рази тому 10