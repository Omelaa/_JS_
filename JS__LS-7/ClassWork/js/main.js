// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function CarInfo(model, year, maxSpeed, engineSM3) {
//     this.model = model;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineSM3 = engineSM3;
//
//     this.drive = () => console.log(`їдемо зі швидкістю ${this.newSpeed || this.maxSpeed} на годину`);
//
//     this.info = () => {
//         console.log(`Модель - ${this.model}.`)
//         console.log(`Рік - ${this.newYear || this.year}.`)
//         console.log(`Максимальна швидкість - ${this.newSpeed || this.maxSpeed}км/год.`)
//         console.log(`Об'єм двигуна см3 - ${this.engineSM3}см.`)
//         console.log(`Ваш водій - ${this.yourDriver || 'Водія немає'}.`)
//     }
//
//     this.increaseMaxSpeed = (newSpeed) => this.newSpeed = newSpeed;
//
//     this.changeYear = (newValue) => this.newYear = newValue;
//
//     this.addDriver = (driver) => this.yourDriver = driver;
// }
//
// let car = new CarInfo('W140', 1993, 280, 6000);
// car.increaseMaxSpeed(290);
// car.changeYear(1900);
// car.addDriver('Vadik');
// car.drive();
// car.info();

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

// class CarInfo {
//     constructor(model, year, maxSpeed, engineSM3) {
//         this.model = model;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineSM3 = engineSM3;
//     };
//
//     drive = () => console.log(`їдемо зі швидкістю ${this.newSpeed || this.maxSpeed} на годину`);
//
//     info = () => {
//         console.log(`Модель - ${this.model}.`)
//         console.log(`Рік - ${this.newYear || this.year}.`)
//         console.log(`Максимальна швидкість - ${this.newSpeed || this.maxSpeed}км/год.`)
//         console.log(`Об'єм двигуна см3 - ${this.engineSM3}см.`)
//         console.log(`Ваш водій - ${this.yourDriver || 'Водія немає'}.`)
//     };
//
//     increaseMaxSpeed = (newSpeed) => this.newSpeed = newSpeed;
//
//     changeYear = (newValue) => this.newYear = newValue;
//
//     addDriver = (driver) => this.yourDriver = driver;
// }
//
// let car = new CarInfo('W140', 1993, 280, 6000);
// car.increaseMaxSpeed(320);
// car.changeYear(1990);
// car.addDriver('Vadik');
// car.drive();
// car.info();

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// function Princess(princessName, princessYearsOld, princessFootSize) {
//     {
//         this.princessName = princessName;
//         this.princessYearsOld = princessYearsOld;
//         this.princessFootSize = princessFootSize;
//     }
// };
//
// let cinderella = [
//     new Princess('Золушка', 18, 38),
//     new Princess('Золушка', 18, 39),
//     new Princess('Золушка', 18, 36),
//     new Princess('Золушка', 18, 40),
//     new Princess('Золушка', 19, 36),
//     new Princess('Золушка', 18, 35),
//     new Princess('Золушка', 18, 45),
//     new Princess('Золушка', 18, 33),
//     new Princess('Золушка', 18, 36),
//     new Princess('Золушка', 18, 39)
// ];
//
// let prince = [
//     princeName = 'Прекрасний Принц',
//     princeYearsOld = 21,
//     princeSlipper = 36,
// ]
//
// for (let she of cinderella){
//     if (she.princessFootSize === 36){
//         console.log(`Це справжня Золушка`);
//     } else {
//         console.log('Це не справжня Золушка')
//     }
//     console.log(she);
// }
//
// let search = cinderella.find(she => she.princessFootSize === 36 && she.princessYearsOld === 18);
// console.log(`Це справжня зошутка - Ім'я - ${search.princessName}, Вік - ${search.princessYearsOld}, Розмір ноги - ${princeSlipper}.`);