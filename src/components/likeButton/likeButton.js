import * as $ from "jquery";

//like
for (let likeCounter of document.querySelectorAll('.like-button__item')) {
    likeCounter.addEventListener('click', function (e) {
        let sign = e.target.getAttribute('data-action');
        let numberOfLikes = e.target.value;
        if (sign == 'disable') {
            numberOfLikes++;
            e.target.setAttribute('data-action', 'enable');
        } else {
            numberOfLikes--;
            e.target.setAttribute('data-action', 'disable');
        }
        e.target.parentNode.classList.toggle('like-button__item_enable');
        e.target.value = numberOfLikes;
    })
}
;