//Loop: es un bucle que ofrece una forma rápida de hacer algo repetidamente.

//Declaraciones: for, do while, while, labeled, break, continue, for...in, for...of

var i = 1;
var msg = '';

while (i < 10) {
    msg += i + ' x 5 = ' + (i * 5) + '<br />';
    i++;
}

document.getElementById('answer').innerHTML = msg;