let products = JSON.parse(localStorage.getItem('products'));

let container = document.createElement('div');
container.classList.add('container--list');

let removeAll = document.createElement('button');
removeAll.innerHTML = '<b>Удалить все</b>';
removeAll.setAttribute('type', 'button');
removeAll.classList.add('button');

let productsWrap = document.createElement('ul');
productsWrap.classList.add('products');

products.forEach((product) => {
    let productWrap = document.createElement('li');
    productWrap.classList.add('products__item');
    productWrap.innerHTML = `<h3 class="products__title">${product.name}</h3>
                             <img class="products__img" src="${product.img}">
                             <div class="products__inner">
                             <span class="products__amount"><b>Штук:</b> ${product.amount}</span>
                             <span class="products__cost"><b>Цена:</b> ${product.cost}$</span>
                             </div>`
    let button = document.createElement('button');
    button.classList.add('button');
    button.style.margin = '0';
    button.setAttribute('type', 'button');
    button.innerText = 'Удалить товар';
    productWrap.appendChild(button);
    productsWrap.appendChild(productWrap);

    button.onclick = () => {
        let arr = JSON.parse(localStorage.getItem('products')) || [];
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            localStorage.removeItem(key);
        }
    };
});

removeAll.onclick = () => {
    localStorage.clear();
};

container.append(productsWrap, removeAll);
document.body.appendChild(container);