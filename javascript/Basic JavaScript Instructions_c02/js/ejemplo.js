//Crear variables para el mensaje de bienvenida
var greeting = 'Hi';
var name = 'Mayra';
var message = ', please check your order';
//Concatenamos las tres variables para crear nuestro mensaje de bienvenida
var welcome = greeting + name + message;

//Crear variables para el detalle de información
var sign = 'Montague house';
var tiles = sign.length;
var subTotal = tiles * 2;
var shipping = 9;
var grandTotal = subTotal + shipping;

var el = document.getElementById('greeting');
el.textContent = welcome;

var elSign = document.getElementById('userSign');
elSign.textContent = sign;

var elTiles= document.getElementById('tiles');
elTiles.textContent = tiles;

var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;