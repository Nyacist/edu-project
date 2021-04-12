// //import Post from './Post' //импорт Post.js
// //import json from './assets/json-file' //импорт json-file.json
// //import logo from './assets/logo.png' //импорт картинок
// import './styles/style.css'
// import * as $ from 'jquery'
// import './styles/scss.scss'

import * as $ from 'jquery'
import slider from 'jquery-ui/ui/widgets/slider'
import '../styles/style.scss'

function resultStr(counter) {
    let div = counter.querySelectorAll('.dropdown__count>h3');
    let str = div[0].textContent +' ';
    switch (div[0].textContent){
        case '0':
        case '5': {
            str+= 'спален';
            break;
        }
        case '1': {
            str += 'спальня';
            break;
        }
        default: str+= 'спальни';
    }
    str+= ', '+div[1].textContent+' ';
    switch (div[1].textContent){
        case '0':
        case '5':
            str+= 'кроватей';
            break;
        case '1':
            str+= 'кровать';
            break;
        default: str+= 'кровати';
    }
    str+= '...';
    counter.previousElementSibling.value = str;
}

$( function() {

    const space = (num) => String(num).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

    $( ".range-slider__item" ).slider({
        range: true,
        min: 0,
        max: 15000,
        values: [ 5000, 10000 ],
        slide: function( event, ui ) {
            $( ".range-slider__amount" ).val(space(ui.values[ 0 ]) + "₽" + " - " + space(ui.values[ 1 ]) + "₽" );
        }
    });

    $( ".range-slider__amount" ).val(space($( ".range-slider__item" ).slider( "values", 0 )) + "₽" +
        " - " + space($( ".range-slider__item" ).slider( "values", 1 )) + "₽");
} );

for (let counter of document.querySelectorAll('.dropdown__counter')) {
    counter.addEventListener('click', function (e) {
        let sign = e.target.getAttribute('data-action');
        if (sign == 'minus') {
            let number = $(e.target).next().text();
            if (number > 0) {
                number--;
                $(e.target).next().html(number);
                resultStr(counter);
            }
        }
        if (sign == 'plus') {
            let number = $(e.target).prev().text();
            if (number < 5) {
                number++;
                $(e.target).prev().html(number);
                resultStr(counter);
            }
        }
    })
}

for (let btn of document.querySelectorAll('.dropdown__button')) {
    btn.addEventListener('click', function (e) {
        this.classList.toggle('dropdown__border');
        this.nextElementSibling.classList.toggle('show');
    })
}

for (let likeCounter of document.querySelectorAll('.like-button__item')) {
    likeCounter.addEventListener('click', function (e) {
        let sign = e.target.getAttribute('data-action');
        let numberOfLikes = e.target.value;
        if (sign == 'disable') {
            numberOfLikes++;
            e.target.setAttribute('data-action', 'enable');
        }
        else {
            numberOfLikes--;
            e.target.setAttribute('data-action', 'disable');
        }
        e.target.parentNode.classList.toggle('like-button__item_enable');
        e.target.value = numberOfLikes;
    })
};

