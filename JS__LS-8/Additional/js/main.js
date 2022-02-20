// Написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let arr = [];

function recursion(value) {
    let child = value.children;
    for (const item of child) {
        recursion(item);
    }
    if (value.className !== '') {
        arr.push(value.className);
        console.log(arr);
    }
}

recursion(document.body);