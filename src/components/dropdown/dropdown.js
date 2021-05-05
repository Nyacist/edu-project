import * as $ from "jquery";

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

//counter
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