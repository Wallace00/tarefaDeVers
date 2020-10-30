/*Ao lado de cada nome é escrito 1 se o aluno, passou no exame
 ou 2 se o aluno foi reprovado.
a) Insira a cada resultado do exame (isto é, um 1 ou um 2). Exiba a mensagem
“Inserir resultado” na tela toda vez que o programa solicitar o resultado do outro
exame.*/
//                           NEW
   var aprovados = 0;
   var reprovados = 0;
   var semIndentificacao = 0;

   for (i = 1; i <= 10; i++)
   {
     var exame = prompt("Digite o resultado do exame " + i);
     if (exame == 1)
     {
       aprovados++
     }
     else if (exame == 2)
     {
       reprovados++
     }else{
       alert("resultado não aceito");
       semIndentificacao++
     }
   }

   alert("Alunos aprovados: " + aprovados  + "\nAlunos reprovados: " + reprovados);

   if(naoIdentificado > 0){
     alert("Resultados não identificados:" + semIndentificacao)
   }

   if (aprovados >= 8)
   {
     alert("Bonus to Instructor!")
   }
