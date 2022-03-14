// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста


fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .then(posts => {
        let container = document.createElement('div');
        container.classList.add('container');
        let wrap = document.createElement('div');
        wrap.classList.add('wrapper');
        for (let post of posts) {
            let button = document.createElement('button');
            button.innerText = 'Добавить';
            button.classList.add('button');
            let divPost = document.createElement('div');
            divPost.classList.add('wrapper__item');
            let postId = document.createElement('span');
            postId.innerText = `User ID: ${post.userId} Post ID: ${post.id}`;
            let title = document.createElement('h3');
            title.innerText = `${post.title}`;
            let body = document.createElement('p');
            body.innerText = `${post.body}`;
            divPost.append(postId, title, body, button);
            wrap.appendChild(divPost);
            button.addEventListener('click', (event) => {
                let userCom = {
                    title: post.title,
                    body: post.body
                }
                let newArr = JSON.parse(localStorage.getItem('posts')) || [];
                newArr.push(userCom);
                localStorage.setItem('posts', JSON.stringify(newArr));
            })
        }
        container.appendChild(wrap);
        document.body.appendChild(container);
    });

let comBlock = JSON.parse(localStorage.getItem('posts'));
let container = document.createElement('div');
container.classList.add('container');
let wrap = document.createElement('div');
wrap.classList.add('wrapper');
for (let item of comBlock) {
    let postBlock = document.createElement('div');
    postBlock.style.padding = '15px';
    postBlock.style.border = '1px solid #000000';
    postBlock.style.margin = '0 15px 15px 0';
    postBlock.innerHTML = `${item.title}<hr>${item.body}`;
    wrap.appendChild(postBlock);
}
container.appendChild(wrap);
document.body.appendChild(container);