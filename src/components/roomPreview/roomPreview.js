import './_roomPreview.scss';
import Splide from '@splidejs/splide';

document.addEventListener( 'DOMContentLoaded', function (){
    let elms = document.getElementsByClassName( 'splide' );
    for ( let i = 0, len = elms.length; i < len; i++ ) {
        new Splide( elms[ i ], {
            classes: {
                arrows: 'splide__arrows your-class-arrows',
                arrow : 'splide__arrow room__slider-arrow',
                prev  : 'splide__arrow--prev room__slider-arrow_prev',
                next  : 'splide__arrow--next room__slider-arrow_next',
            },
        } ).mount();
    }
});

