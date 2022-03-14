// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(posts => {
//         let wrapper = document.createElement('ul');
//         wrapper.classList.add('posts');
//         for (let post of posts) {
//             let postLi = document.createElement('li');
//             postLi.classList.add('posts__post');
//             let id = document.createElement('div');
//             id.innerText = `User ID - ${post.userId}, ID - ${post.id}`;
//             let h3 = document.createElement('h3');
//             h3.innerText = `${post.title}`;
//             let p = document.createElement('p');
//             p.innerText = `${post.body}`;
//             postLi.append(id, h3, p);
//             wrapper.appendChild(postLi);
//         }
//         document.body.appendChild(wrapper);
//     });


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
//
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response => response.json())
//     .then(comments => {
//         let wrapper = document.createElement('ul');
//         wrapper.classList.add('comments');
//         for (let comment of comments) {
//             let commentLi = document.createElement('li');
//             commentLi.classList.add('comments__comment');
//             let id = document.createElement('div');
//             id.innerText = `Post ID - ${comment.postId}, ID - ${comment.id}`;
//             let h3 = document.createElement('h3');
//             h3.innerText = `${comment.name}`;
//             let span = document.createElement('span');
//             span.innerText = `Email - ${comment.email}`;
//             let p = document.createElement('p');
//             p.innerText = `${comment.body}`;
//             commentLi.append(id, h3, span,p);
//             wrapper.appendChild(commentLi);
//         }
//         document.body.appendChild(wrapper);
//     });