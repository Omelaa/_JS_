// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста


fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .then(posts => {
        let wrapper = document.createElement('ul');
        wrapper.classList.add('wrapper');
        posts.forEach((post) => {
            let postInner = document.createElement('li');
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
            wrapper.appendChild(postInner);

            button.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                    .then(response => response.json())
                    .then(comments => {
                        comments.forEach((comment) => {
                            console.log(comment);
                            let commentWrap = document.createElement('div');
                            commentWrap.innerHTML = '<b>- Comments -</b>';
                            commentWrap.style.padding = '15px 0 0 0';
                            commentWrap.style.borderTop = '1px solid #000000'
                            commentWrap.style.borderBottom = '1px solid #000000'
                            commentWrap.style.display = 'grid';
                            commentWrap.style.gridGap = '15px';
                            let commentId = document.createElement('h3');
                            commentId.innerText = `ID - ${comment.id}.`;
                            let commentName = document.createElement('div');
                            commentName.innerHTML = `<b>${comment.name}.</b>`;
                            let commentEmail = document.createElement('div');
                            commentEmail.innerHTML = `<b>Email - ${comment.email}.</b>   `;
                            let commentBody = document.createElement('p');
                            commentBody.innerText = `${comment.body}.`;
                            commentWrap.append(commentId, commentName, commentEmail, commentBody);
                            postInner.appendChild(commentWrap);
                        });
                    });
            };
        });
        document.body.appendChild(wrapper);
    });
