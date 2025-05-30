function readMore1() {
    let dots = document.getElementById("dots1");
    let more = document.getElementById("more1");
    let btn = document.getElementById("btn1");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btn.innerHTML = "Читать далее";
        more.style.display = "none";
    } else {
        dots.style.display = "none";
        btn.innerHTML = "Скрыть";
        more.style.display = "inline";
    }
}

function readMore2() {
    let dots = document.getElementById("dots2");
    let more = document.getElementById("more2");
    let btn = document.getElementById("btn2");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btn.innerHTML = "Читать далее";
        more.style.display = "none";
    } else {
        dots.style.display = "none";
        btn.innerHTML = "Скрыть";
        more.style.display = "inline";
    }
}

function readMore3() {
    let dots = document.getElementById("dots3");
    let more = document.getElementById("more3");
    let btn = document.getElementById("btn3");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btn.innerHTML = "Читать далее";
        more.style.display = "none";
    } else {
        dots.style.display = "none";
        btn.innerHTML = "Скрыть";
        more.style.display = "inline";
    }
}

document.addEventListener('DOMContentLoaded', function() {

    const reactionButtons = document.querySelectorAll('.blog__reaction');
    reactionButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    const shareButtons = document.querySelectorAll('.blog__share');
    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Ссылка на статью скопирована в буфер обмена!');
        });
    });
});

function addComment(button) {
    const commentForm = button.parentElement;
    const commentInput = commentForm.querySelector('.blog__comment-input');
    const commentText = commentInput.value.trim();
    
    if (commentText) {
        console.log('Новый комментарий:', commentText);
        commentInput.value = '';
        alert('Комментарий успешно отправлен!');
    } else {
        alert('Пожалуйста, введите текст комментария');
    }
}