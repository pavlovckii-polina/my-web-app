// Все экраны и пункты меню
var screens = document.querySelectorAll('.screen');
var menuItems = document.querySelectorAll('.menu__item');

// Какой пункт меню подсвечивать для каждого экрана
var menuForScreen = {
    home: 'home',
    quest: 'home',
    done: 'home',
    map: 'map',
    quests: 'quests',
    profile: 'profile'
};

// Показать нужный экран
function showScreen(name) {
    for (var i = 0; i < screens.length; i++) {
        screens[i].classList.remove('active');
    }
    document.getElementById(name).classList.add('active');

    // Подсветка пункта меню
    for (var j = 0; j < menuItems.length; j++) {
        var item = menuItems[j];
        if (item.dataset.screen === menuForScreen[name]) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    }

    // Прокрутка экрана в начало
    document.querySelector('.content').scrollTop = 0;
}

// Все кнопки с атрибутом data-screen переключают экраны
var buttons = document.querySelectorAll('[data-screen]');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        showScreen(this.dataset.screen);
    });
}

// Кнопки-заглушки
document.getElementById('hint-button').addEventListener('click', function () {
    alert('Подсказка: ищи здание с необычной формой в центре города.');
});
document.getElementById('route-button').addEventListener('click', function () {
    alert('Маршрут построен!');
});
document.getElementById('settings-button').addEventListener('click', function () {
    alert('Настройки пока недоступны.');
});
