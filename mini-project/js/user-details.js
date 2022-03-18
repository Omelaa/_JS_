// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
//

let user = JSON.parse(localStorage.getItem('user'));

let container = document.createElement('div');
container.classList.add('container');
let wrapper = document.createElement('div');
wrapper.classList.add('user__block');
inner = document.createElement('div');
inner.classList.add('user__content');
let button = document.createElement('button');
button.innerText = `Post of current user`;
button.classList.add('button');
button.setAttribute('type', 'button');
button.style.width = '90%';

wrapper.append(inner, button);
container.appendChild(wrapper);
document.body.appendChild(container);

button.onclick = () => {
    fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts/')
        .then(response => response.json())
        .then(posts => {
            let postInner = document.createElement('ul');
            postInner.classList.add('post__items');
            posts.forEach((post) => {
                let postItem = document.createElement('li');
                postItem.classList.add('post__item');
                postItem.innerHTML = `<span class="post__title"><b>${post.title}</b></span>`;
                let button = document.createElement('button');
                button.innerText = `Post details`;
                button.classList.add('button', 'button--post');
                postItem.appendChild(button);
                postInner.appendChild(postItem);
                button.onclick = () => {
                    localStorage.setItem('post', JSON.stringify(post));
                    document.location = 'post-details.html';
                };
            });
            container.appendChild(postInner);
        });
    button.style.display = 'none';
};

function rec(slave, wrapper) {
    for (const key in slave) {
        if (typeof (slave[key]) === 'object') {
            let userName = document.createElement('div');
            userName.innerHTML = `<b>${key}:</b>`;
            wrapper.append(userName);
            rec(slave[key], wrapper);
        } else {
            let userContent = document.createElement('div');
            userContent.innerHTML = `<b>${key}:</b> ${slave[key]}.`;
            wrapper.append(userContent);
        }
    }
}

rec(user, inner);
