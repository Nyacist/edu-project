//button disable

for (let btn of document.querySelectorAll('.btn_background')) {

    if (btn.querySelector('.btn_default').disabled ) {
        btn.classList.toggle('btn-disable');
    }
}