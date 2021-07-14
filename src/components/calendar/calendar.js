import './_calendar.scss'

import * as $ from 'jquery'


$('#input_to').focus(function (){$('.calendar__wrapper').fadeIn()})
$('#input_from').focus(function (){$('.calendar__wrapper').fadeIn()})

$(document).click( function(e){
    if ( $(e.target).closest('.calendar').length ) {
        // клик внутри элемента
        return;
    }
    // клик снаружи элемента
    $('.calendar__wrapper').fadeOut();
});


/* Локализация datepicker */
$.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: 'Предыдущий',
    nextText: 'Следующий',
    currentText: 'Сегодня',
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
    dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
    dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
    dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    weekHeader: 'Не',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);

$.datepicker._defaults.dateFormat = "dd.mm.yy"

$(".datepicker").datepicker({

    beforeShowDay: function(date) {
        let date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input_to").val());
        let date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input_from").val());
        let returnClass = ""
        if(date1 && (date.getTime() == date1.getTime())){
            returnClass = "date-select"
            if (date2 !== null) returnClass += " date-select_left"
        }
        if(date2 && (date.getTime() == date2.getTime())){
            returnClass = "date-select"
            if (date1 !== null) returnClass += " date-select_right"
        }
        if(date1 && (date2 && (date > date1) && (date < date2))){
            returnClass = "date-range"
        }
        return [true, returnClass];
    },
    onSelect: function(dateText, inst) {
        let date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input_to").val());
        let date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input_from").val());
        let selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);

        if (!date1 || date2) {
            $("#input_to").val(dateText);
            $("#input_from").val("");
            $(this).datepicker();
        } else if (selectedDate < date1) {
            $("#input_from").val($("#input_to").val());
            $("#input_to").val(dateText);
            $(this).datepicker();
        } else {
            $("#input_from").val(dateText);
            $(this).datepicker();
        }
    }
});



