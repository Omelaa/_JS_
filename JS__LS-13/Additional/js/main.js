//
// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let container = document.createElement('div');
container.classList.add('container');
let formCreate = document.createElement('form');
formCreate.classList.add('form');
formCreate.innerHTML = `<input class="form__input" type="text" name="name" placeholder="Имя">
                        <input class="form__input" type="number" name="amount"  placeholder="Количество">
                        <input class="form__input" type="number" name="cost"  placeholder="Цена">
                        <input class="form__input" type="text" name="img"  placeholder="Ссылка на URL картинки">
                        <button class="button" type="submit">Create product's</button>`;

let link = document.createElement('div');
link.classList.add('button');
link.innerHTML = `<a class="button" href="list.html">Перейти к продуктам</a>`
link.style.transform = 'translateX(-400%)';

container.append(formCreate, link);
document.body.appendChild(container);

let form = document.forms[0];

form.onsubmit = (e) => {
    e.preventDefault();
    link.style.transform = 'translateX(0%)';
    let product = {
        name: e.target.name.value || 'Ivan',
        amount: e.target.amount.value || 'Malo',
        cost: e.target.cost.value || 'Dorogo',
        img: e.target.img.value || 'http://images.shoutwiki.com/ytp/9/97/%D0%A0%D0%B8%D0%BA%D0%B0%D1%80%D0%B4%D0%BE_%D0%9C%D0%B8%D0%BB%D0%BE%D1%81.jpg'
    };
    let arr = JSON.parse(localStorage.getItem('products')) || [];
    arr.push(product);
    localStorage.setItem('products', JSON.stringify(arr));
};