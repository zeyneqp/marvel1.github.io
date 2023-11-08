const activePage = window.location.pathname;
const navlinks = document.querySelectorAll('nav a').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active');}
})
import { Toast } from 'bootstrap.esm.min.js'

Array.from(document.querySelectorAll('.toast'))
    .forEach(toastNode => new Toast(toastNode))
function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

function isBigEnough(value) {
    return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// повторить с интервалом 2 секунды
let timerId = setInterval(() => alert('tick'), 2000);

//Например, если вы хотите проверить параметр passive
var passiveSupported = false;

try {
    var options = Object.defineProperty({}, "passive", {
        get: function () {
            passiveSupported = true;
        },
    });

    window.addEventListener("test", null, options);
} catch (err) {}

//Это пример добавления и последующего удаления обработчика событий.
var div = document.getElementById("div");
var listener = function (event) {
    /* do something here */
};
div.addEventListener("click", listener, false);
div.removeEventListener("click", listener, false);

    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')

    if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastTrigger.addEventListener('click', () => {
            toastBootstrap.show()
        })
    }

