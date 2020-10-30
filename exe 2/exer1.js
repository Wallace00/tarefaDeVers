var nota1 = 50;
var nota2 = 70;
var nota3 = 95;
const nome = "wallace";
const faltas = 50;

const limitiFalta = (25*80)/100;//20
const media = 70;
const aulaTotal = 80;

const mediaFinal = nota1+nota2+nota3/media;
const faltasFinal = faltas>=limitiFalta;

//console.log(nome, nota1, nota2, nota3, faltas);
if(faltas>=limitiFalta){
  console.log("reprovado por faltas"+ nome);
} else{
  console.log("faltas insuficientes, aprovado"+ nome);
}
if(mediaFinal>=limitiFalta){
  console.log("nao atingiu a media"+ nome);
}else{
  console.log("atingiu a media"+ nome);
}
