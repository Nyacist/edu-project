
import './_menu.scss'

import * as $ from "jquery";


//dropdown

//show
for (let btn of document.querySelectorAll('.menu__dropdown-button')) {
    btn.addEventListener('click', function (e) {
        this.nextElementSibling.classList.toggle('show');
    })
}