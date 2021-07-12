//Callback es una función que recibe como argumento otra función y la ejecuta

function foo(callback) {
    //La función foo es la encargada de ejecutar el callback
    callback();
}

function showAlert () {
    alert('Alerta');
}

button.addEventeListener('click', showAlert);

//Callback Hell