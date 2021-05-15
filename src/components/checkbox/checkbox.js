//show
for (let btn of document.querySelectorAll('.checkbox-list__title')) {
    btn.addEventListener('click', function (e) {
        this.classList.toggle('checkbox-list__title_show');
        this.nextElementSibling.classList.toggle('show');
    })
}