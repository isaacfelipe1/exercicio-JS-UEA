/*
Escreva um algoritmo que receba  dois números reais e um código
 de seleção do usuário. se o código digitado for 1, faça  o algoritmo
 adicionar  os dois números previmente digitados e mostre o resultado;
 se o código de selecão for 2 , os números deverão ser multiplicados;
 se  o código de seleção for 3, o primeiro número deve ser dividido pelo segundo.
*/
var numero1=Number(prompt("Informe o primeiro número"))
var numero2=Number(prompt('Informe o segundo número'))
var codigo=Number(prompt("Digite 1  2 ou 3"))

if(codigo==1){
    document.write("Seus Dados são :" +  numero1 + " e "  + numero2) 
} else if(codigo==2){
    var mult=numero1* numero2
    document.write("Resultado = " + mult)

} else if(codigo==3){
    var div=numero1/numero2
    document.write("Resultado" + div)
}
