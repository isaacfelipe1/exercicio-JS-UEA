
/*
Faça um programa que entre com o nome e o sálario de um funcionari o
e mostre seu novo salário, sabendo que o mesmo teve um aumento
de 15%
*/

var nome=prompt("Insira o seu nome")
var salario=Number(prompt("Informe o seu sálario"))
var novoSalario=salario*15
document.write(`Olá, ${nome}, Seu novo salário é de : ${novoSalario}`)