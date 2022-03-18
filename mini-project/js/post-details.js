// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//

let post = JSON.parse(localStorage.getItem('post'));

let container = document.createElement('div');
container.classList.add('container');

let wrapper = document.createElement('div');
wrapper.classList.add('post__wrapper');

let postItem = document.createElement('div');
postItem.classList.add('post__item', 'post__item--list');
postItem.innerHTML = `<span class="post__id"><b>ID:</b> ${post.id}, <b>UserID:</b> ${post.userId}.</span>
                      <h3 class="post__title">${post.title}.</h3>
                      <div class="post__text">
                      <p>${post.body}.</p>
                      </div>`;

wrapper.appendChild(postItem);
container.appendChild(wrapper);
document.body.appendChild(container);

fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
    .then(response => response.json())
    .then(comments => {
        let wrapperForComment = document.createElement('div');
        wrapperForComment.classList.add('comment__wrapper');
        let title = document.createElement('h2');
        title.classList.add('comment__head');
        title.innerText = '- Comments -';
        let commentInner = document.createElement('ul');
        commentInner.classList.add('comment__inner');
        comments.forEach((comment) => {
            let commentItem = document.createElement('li');
            commentItem.classList.add('comment__item')
            commentItem.innerHTML = `<div class="comment__info">
                                     <span class="comment__title"><b>Name: ${comment.name}</b></span>
                                     <span class="comment__email"><b>${comment.email}.</b></span>
                                     </div>
                                     <div class="comment__text">
                                     <p>${comment.body}</p>
                                     </div>`;
            console.log(comment);

            commentInner.append(commentItem);
        });
        wrapperForComment.append(title, commentInner);
        container.appendChild(wrapperForComment);
    });