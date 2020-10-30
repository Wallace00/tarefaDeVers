
var par = 0
var impar = 0

for (i=0;i<10;i++){
    var dado1 = Math.floor(Math.random() * 6 + 1);
    var dado2 = Math.floor(Math.random() * 6 + 1);
    var soma = dado1 + dado2;
    var conf = soma % 2;
if (conf == 0) {
    resultado = "O número " + soma + " é par!";
    par ++
    console.log (resultado);
} else if (conf != 0){
    resultado = "O número " + soma + " é ímpar!" ;
    impar ++
    console.log (resultado);
}
}
console.log ("Há " + par + " números pares");
console.log ("Há " + impar + " números ímpares");
