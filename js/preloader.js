window.onload = function () {
    // Добавляем класс 'loaded_hiding' к body, чтобы начать скрытие прелоадера
    document.body.classList.add('loaded_hiding');

    // Устанавливаем таймер на 500 мс для плавного скрытия прелоадера
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');

        // После скрытия прелоадера добавляем класс 'loaded' ко всем элементам с классом 'animate-on-load'
        const elementsToAnimate = document.querySelectorAll('.header, .overlay-avatar, .fly-icon');
        elementsToAnimate.forEach(element => {
            element.classList.add('loaded');
        });
    }, 500);
};