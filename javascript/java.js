window.addEventListener('DOMContentLoaded', function () {
    const loader = document.querySelector('.loader')
    setTimeout(function () {
        loader.style.opacity = '0'
        loader.style.display = 'none'
    }, 1000)

    const menu = document.querySelector('#mmenu'),
        mobile = document.querySelector('.mob-menu'),
        deletem = document.querySelector('#deletem'),
        btndw = document.querySelectorAll('.buyurtma'),
        formdw = document.querySelector('#formdw'),
        deletedw = document.querySelector('#deletedw');

    menu.addEventListener('click', function () {
        mobile.style.display = ('block');
        menu.style.display = ('none');
        deletem.style.display = ('block');
    });

    deletem.addEventListener('click', function () {
        mobile.style.display = ('none');
        menu.style.display = ('block');
        deletem.style.display = ('none');
    });

    
    btndw.addEventListener('click', function () {
        formdw.style.display = 'block';
    });

    deletedw.addEventListener('click', function () {
        formdw.style.display = 'none';
    });

})