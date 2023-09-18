
var num1;
var num2;

num1 = parseFloat(prompt("Valor 1: "));
num2 = parseFloat(prompt("Valor 2: "));

alert("Soma: " + num1 + " + " + num2 + " = " + (num1 + num2));
alert("Subtração: " + num1 + " - " + num2 + " = " + (num1 - num2).toFixed(2));
alert("Produto: " + num1 + " * " + num2 + " = " + (num1 * num2).toFixed(2));
alert("Divisão: " + num1 + " / " + num2 + " = " + (num1 / num2).toFixed(2));
alert("Resto: " + num1 + " % " + num2 + " = " + (num1 % num2).toFixed(2));