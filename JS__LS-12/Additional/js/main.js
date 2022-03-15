// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {

        let container = document.createElement('container');
        container.classList.add('container');
        let wrapper = document.createElement('ul');
        wrapper.classList.add('wrapper');

        container.appendChild(wrapper);
        document.body.appendChild(container);

        userObject(users, wrapper);

        function userObject(user, wrapper) {
            let button = document.createElement('button');
            button.classList.add('button');
            button.innerText = 'See Post';
            for (const key in user) {
                if (typeof user[key] === 'object') {
                    let firstWrap = document.createElement('div');
                    firstWrap.classList.add('wrapper__item');
                    firstWrap.innerHTML = `<b>${key}:</b>`;
                    firstWrap.appendChild(button);
                    userObject(user[key], firstWrap);
                    wrapper.appendChild(firstWrap);
                } else {
                    let secondWrap = document.createElement('div');
                    secondWrap.innerHTML = `<b>${key}:</b> ${user[key]}.`;
                    wrapper.appendChild(secondWrap);
                }
            }

            users.forEach((user) => {
                button.onclick = () => {
                    button.style.display = 'none';
                    fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
                        .then(response => response.json())
                        .then(posts => {
                            posts.forEach((post) => {
                                let postInner = document.createElement('div');
                                postInner.classList.add('wrapper__item');
                                let id = document.createElement('span');
                                id.innerText = `User ID - ${post.userId}, ID - ${post.id}.`;
                                let title = document.createElement('h3');
                                title.innerText = `${post.title}.`;
                                let body = document.createElement('p');
                                body.innerText = `${post.body}.`;
                                let button = document.createElement('button');
                                button.classList.add('button');
                                button.innerText = 'Показать коментарии';
                                postInner.append(id, title, body, button);
                                button.onclick = () => {
                                    button.style.display = 'none';
                                    fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                                        .then(response => response.json())
                                        .then(comments => {
                                            comments.forEach((comment) => {
                                                console.log(comment);
                                                let commentWrap = document.createElement('div');
                                                commentWrap.style.padding = '15px 0 0 0';
                                                commentWrap.style.borderTop = '1px solid #ffffff'
                                                commentWrap.style.borderBottom = '1px solid #ffffff'
                                                commentWrap.style.display = 'grid';
                                                commentWrap.style.gridGap = '15px';
                                                commentWrap.innerHTML = `
                                                                        <h3>ID - ${comment.id}</h3>
                                                                        <h4>Name - ${comment.name}</h4>
                                                                        <h5>Email - ${comment.email}</h5>
                                                                        <h6>Body - ${comment.body}</h6>`
                                                postInner.appendChild(commentWrap);
                                            });
                                        });
                                };
                                wrapper.appendChild(postInner);
                            });
                        });
                };
            });
        }

    });