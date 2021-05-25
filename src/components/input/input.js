import './_input.scss';

import * as $ from "jquery";

//like
for (let like of document.querySelectorAll('.like-button')) {
    like.addEventListener('click', function (e) {
        let sign = e.target.getAttribute('data-action');
        let numberOfLikes = e.target.value;
        if (sign == 'like') {
            numberOfLikes--;
            e.target.setAttribute('data-action', '');
        }
        else {
            numberOfLikes++;
            e.target.setAttribute('data-action', 'like');
        }

        like.classList.toggle('like-button__enable');
        e.target.value = numberOfLikes;
    })
}
;