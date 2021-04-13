/*
Faça um algoritmo que leia o nome e as três notas de uma disciplina
de um aluno e ao final escreva o nome do aluno, sua média e se
ele foi aprovado, sabendo-se que a média para aprovação é igual
ou superio a 8
*/

var nome=prompt("Informe o sue nome")
var nota1=Number(prompt("Informe sua nota 1"))
var nota2=Number(prompt("Informe sua nota 2"))
var nota3=Number(prompt("Informe sua nota 3"))
var media=(nota1+nota2+nota3)/3
if(media>=8){
    document.write(`Sua média, senhor <strong>${nome}</strong> é ${media.toFixed(2)}. Está <strong>Aprovado</strong>`)
}else{
    document.write("Verifique sua nota na secretaria")
}