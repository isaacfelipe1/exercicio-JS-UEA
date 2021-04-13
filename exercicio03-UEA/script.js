/*
Faça um algortmo que lei dois valores inteiros
A  e B se os valores forem iguais devem ser somados os dois,
caso contrário multiplique A por B ao final o cálculo atribuir o valor
para uma variável C.
*/
var valor1=Number(prompt("Insira o valor A"))
var valor2=Number(prompt("Insira o valor B"))
if(valor1==valor2){
    var resultado=valor1+valor2
}else{
    resultado=valor1*valor2
}
document.write("Resultado = " + resultado)