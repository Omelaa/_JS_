// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let container = document.createElement('div');
        container.classList.add('container');
        let usersInner = document.createElement('ul');
        usersInner.classList.add('users');

        users.forEach((user) => {
            let userInner = document.createElement('li');
            userInner.classList.add('users__item');
            userInner.innerHTML = `<h3 class="users__title">ID - ${user.id}, Name - ${user.name}</h3>`;
            let button = document.createElement('button');
            button.classList.add('button');
            button.innerText = 'Посмотреть детальную информацию';
            userInner.appendChild(button);
            usersInner.appendChild(userInner);

            button.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/users/' + user.id)
                    .then(response => response.json())
                    .then(user => {
                        localStorage.setItem('user', JSON.stringify(user));
                        document.location = 'user-details.html';
                    });
            };
        });
        container.appendChild(usersInner);
        document.body.appendChild(container);
    });


// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)