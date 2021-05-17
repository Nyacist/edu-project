import * as $ from "jquery";

//show
for (let btn of document.querySelectorAll('.dropdown__input')) {
    btn.addEventListener('click', function (e) {
        this.classList.toggle('dropdown__border');
        this.nextElementSibling.classList.toggle('show');
    })
}

//counter
for (let counter of document.querySelectorAll('.dropdown__wrapper')) {
    counter.addEventListener('click', function (e) {
        let sign = e.target.getAttribute('data-action');
        if (sign == 'minus') {
            let number = $(e.target).next().text();
            if (number > 0) {
                number--;
                $(e.target).next().html(number);
            }
        }
        if (sign == 'plus') {
            let number = $(e.target).prev().text();
            if (number < 5) {
                number++;
                $(e.target).prev().html(number);
            }
        }
        switch (counter.getAttribute('data-action')){
            case 'guestsNumbers': {
                guestsCount(counter);
                break;
            }
            case 'rooms': {
                resultStr(counter);
                break;
            }
        }
    })
}

function guestsCount(counter){
    let guestsNumber = 0;
    for (let div of counter.querySelectorAll('.dropdown__count>h3')){
        guestsNumber+= +$(div).text();
    }
    let str = guestsNumber + ' ';
    switch (guestsNumber) {
        case 1: {
            str += 'гость';
            break;
        }
        case 2:
        case 3:
        case 4:{
            str += 'гостя';
            break;
        }
        default:
            str += 'гостей';
    }
    counter.previousElementSibling.value = str;
}

function resultStr(counter) {
    let div = counter.querySelectorAll('.dropdown__count>h3');
    let str = div[0].textContent + ' ';
    switch (div[0].textContent) {
        case '0':
        case '5': {
            str += 'спален';
            break;
        }
        case '1': {
            str += 'спальня';
            break;
        }
        default:
            str += 'спальни';
    }
    str += ', ' + div[1].textContent + ' ';
    switch (div[1].textContent) {
        case '0':
        case '5':
            str += 'кроватей';
            break;
        case '1':
            str += 'кровать';
            break;
        default:
            str += 'кровати';
    }
    str += '...';
    counter.previousElementSibling.value = str;
}


