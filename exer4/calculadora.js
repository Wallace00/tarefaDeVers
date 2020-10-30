
/*Crie uma função que seja uma calculadora.*/

/* soma
  subtração
  multiplicação
  divisão
  retorna 0 */

const SOMA = 'somar';
const SUB = 'subtrair';
const MULT = 'multiplicar';
const DIV = 'dividir';


function calculadora(tipoCalculo, num, num2) {
  let total=0;
  switch(tipoCalculo) {
    case SOMA:
      total = soma(num, num2);
      break;
    case SUB:
      total = subtrair(num, num2);
    case MULT:
      total = multiplicar(num, num2)
      ;
    case DIV:
      total = dividir(num, num2)
      ;
    default:
      return total;
    break;
  }
  return total;
}

function soma(numero, numero2) {
  return numero + numero2;
}
function subtrair(numero, numero2) {
  return numero - numero2;
}
function multiplicar(numero, numero2) {
  return numero * numero2;
}
function dividir(numero, numero2) {
  if (numero === 0 || numero2 === 0){
    return "Não ha divisao por 0!";
  }
  return numero / numero2;
}

console.log(calculadora(SOMA, 2, 3));
console.log(calculadora(SUB, 5, 3 ));
console.log(calculadora(MULT, 3, 3));
console.log(calculadora(DIV, 12, 3));
