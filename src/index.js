// //import Post from './Post' //импорт Post.js
// //import json from './assets/json-file' //импорт json-file.json
// //import logo from './assets/logo.png' //импорт картинок
// import './styles/style.css'
// import * as $ from 'jquery'
// import './styles/scss.scss'

import * as $ from 'jquery'
import slider from 'jquery-ui/ui/widgets/slider'
import './pages/style.scss'
import './components/dropdown/dropdown'
import './components/likeButton/likeButton'
import './components/rangeSlider/rangeSlider'
import './components/button/button'




//show
for (let btn of document.querySelectorAll('.dropdown__button')) {
    btn.addEventListener('click', function (e) {
        this.classList.toggle('dropdown__border');
        this.nextElementSibling.classList.toggle('show');
    })
}




