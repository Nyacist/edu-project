
import './_menu.scss'

import * as $ from 'jquery'

//menu dropdown show
for (let btn of document.querySelectorAll('.menu__dropdown-button')) {
    btn.addEventListener('click', function (e) {
        this.nextElementSibling.classList.toggle('show');
    })
}

//burger menu show

for (let btn of document.querySelectorAll('.menu__burger')) {
    btn.addEventListener('click', function (e) {
        //let menu = document.querySelector('.menu')
        let menu = btn.nextElementSibling
        menu.classList.toggle('show')
        menu.classList.toggle('menu__burger-block')
        menu.classList.toggle('container_horizontal')
        document.querySelector('.header').classList.toggle('header__margin')
    })
}
