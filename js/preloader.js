window.onload = function () {
    document.body.classList.add('loaded_hiding');

    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');

        const elementsToAnimate = document.querySelectorAll('.header, .overlay-avatar, .fly-icon');
        elementsToAnimate.forEach(element => {
            element.classList.add('loaded');
        });
    }, 500);
};