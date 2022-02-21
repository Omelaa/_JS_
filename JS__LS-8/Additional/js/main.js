// Написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let arr = [];

function recursion(value) {
    let child = value.children;
    for (const item of child) {
        recursion(item);
    }
    if (value.className !== '') {
        value.className.split(' ').map(item => arr.push(item));
    }
    return arr;
}

console.log(recursion(document.body));