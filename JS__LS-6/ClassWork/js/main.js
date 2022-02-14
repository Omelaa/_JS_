
// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let normalName = (str) => {
//     let sum = str.replaceAll('.', ' ').replaceAll('-', ' ').replaceAll('_', ' ').split(' ');
//     arr = [];
//     for (let string of sum){
//         if(string !== ''){
//             arr.push(string);
//         }
//     }
//     return arr.join(' ');
// };
//
// console.log(normalName('Harry..Potter'));

//
//
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let arr = [];
//
// let randomNums = (arr, number) => {
//     for (let i = 0; i <= 20; i++) {
//         arr[i] = Math.floor(Math.random() * number);
//     }
//     return arr;
// }
//
// console.log(randomNums(arr, 100));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// arr.sort((a, b) => b - a);
// console.log(arr);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
//
// let result = arr.filter(number => number%2 === 0 && number > 0);
// console.log(result);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//
// let result = arr.map(num => num.toString());
// console.log(result);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let nums = [11, 21, 3];
//
// let sortNums = (arr, direction) => arr.sort((a, b) =>{
//     if (direction === 'ascending'){
//         return a - b;
//     } else if (direction === 'descending'){
//         return  b - a;
//     }
// });
//
// console.log(sortNums(nums, 'descending'));
//
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let sortCourses = (arr) => arr.sort((a, b) => a.monthDuration - b.monthDuration).filter(sort => sort.monthDuration > 5);
//
// console.log(sortCourses(coursesAndDurationArray));


