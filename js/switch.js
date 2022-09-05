window.addEventListener('DOMContentLoaded', () => {
    const switchTitles = Array.from(document.querySelectorAll('[data-switch-title]'));
    const switchDescrs = Array.from(document.querySelectorAll('[data-switch-descr]'));

    function removeAll() {
        switchTitles.forEach((item) => {
            item.classList.remove('catalog__list-item_active');
        })
        switchDescrs.forEach((descr) => {
            descr.classList.remove('catalog__descr_active');
        })
    }

    switchTitles.forEach((item, i) => {
        item.addEventListener('click', () => {
            removeAll();
            item.classList.add('catalog__list-item_active');
            switchDescrs[i].classList.add('catalog__descr_active');
        })
    })
})