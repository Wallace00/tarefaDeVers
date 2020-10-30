/*
até 1.045,00          30%
1.045,01 a 1.500,00   25%
1.500,01 a 2.600,00   20%
2.600,01 a 3.550,00   15%
Acima de 3.550,00     10%
*/

let salario = 123456;

  if(salario<=104500){
    let a = (salario*30)/100;
    console.log(a+"foi adicionado um aumento de 30%");
  }else if (salario>=104501 &&  salario<=150000){
    let b = (salario*25)/100;
    console.log(b + "foi adicionado um aumento de 25%");
  }else if (salario>=150001 &&  salario<=260000){
    let c = (salario*20)/100;
    console.log(c+"foi adicionado um aumento de 20%");
  }else if (salario>=260001 &&  salario<=355000){
    let d = (salario*15)/100;
    console.log(d+"foi adicionado um aumento de 15%");
  }else{
    let e = (salario*10)/100;
    console.log(e+"foi adicionado um aumento de 10%");
}
