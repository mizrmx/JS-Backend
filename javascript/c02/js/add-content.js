
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Buenas Noches';
} else if (hourNow > 12) {
    greeting = 'Buenas Tardes';
} else if (hourNow > 0) {
    greeting = 'Buen día';
} else {
    greeting = 'Bienvenido!';
}

document.write('<h3>' + greeting + '</h3>' );