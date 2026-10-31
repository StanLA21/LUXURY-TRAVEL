document.addEventListener('DOMContentLoaded', () => {
    const selectDirection = document.getElementById('selectDirection');
    const selectMonth = document.getElementById('selectMonth');

    
    if (!selectDirection || !selectMonth) return;

    const directionToggle = selectDirection.querySelector('.select-direction__toggle');
    const monthToggle = selectMonth.querySelector('.select-month__toggle');
    const valueSpan = selectDirection.querySelector('.select-direction__value');
    const valueSpanMonth = selectMonth.querySelector('.select-month__value');
    const itemDirection = selectDirection.querySelectorAll('.select-direction__item');
    const itemMonth = selectMonth.querySelectorAll('.select-month__item');

    directionToggle.addEventListener('click', () => {
        selectDirection.classList.toggle('is-open');
    });
    
    monthToggle.addEventListener('click', () => {
        selectMonth.classList.toggle('is-open');
    });

    itemDirection.forEach(item => {
        item.addEventListener('click', () => {
            valueSpan.textContent = item.textContent;
            selectDirection.classList.remove('is-open');
        });
    });
    
    itemMonth.forEach(item => {
        item.addEventListener('click', () => {
            valueSpanMonth.textContent = item.textContent;
            selectMonth.classList.remove('is-open');
        });
    });

    document.addEventListener('click', (e) => {
        if (!selectDirection.contains(e.target)) {
            selectDirection.classList.remove('is-open');
        }
        if (!selectMonth.contains(e.target)) {
            selectMonth.classList.remove('is-open');
        }
    });
});





