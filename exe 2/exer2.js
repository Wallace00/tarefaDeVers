/*Um comerciante comprou um produto e quer vendê-lo com um lucro de 45% se o valor da compra for menor que R$ 50,00; if
 caso contrário, o lucro será de 30%. else
Desenvolva
uma aplicação em JavaScript
 que leia o valor do produto e imprima o valor de venda
para o produto.*/

var precoDaCompra = 35;
const valorMaximoDaCompra = 50;
var menosDeSinquenta = 45;
var maisDeSinquenta = 30;
let conta = (precoDaCompra*menosDeSinquenta)/100 ;
let conta2 = (precoDaCompra*maisDeSinquenta)/100 ;

if(precoDaCompra<50){
console.log(conta);
}else{
  console.log(conta2);
}
//3 horas de pesquisa
//https://pt.stackoverflow.com/questions/437708/calculador-de-porcentagem-em-javascript
