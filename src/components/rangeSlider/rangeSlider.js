//range slider
import * as $ from "jquery";

$(function () {

    const space = (num) => String(num).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

    $(".range-slider__item").slider({
        range: true,
        min: 0,
        max: 15000,
        values: [5000, 10000],
        slide: function (event, ui) {
            $(event.target).prev().children(".range-slider__amount").val(space(ui.values[0]) + "₽" + " - " + space(ui.values[1]) + "₽");
        }
    });

    $(".range-slider__amount").val(space($(".range-slider__item").slider("values", 0)) + "₽" +
        " - " + space($(".range-slider__item").slider("values", 1)) + "₽");
});