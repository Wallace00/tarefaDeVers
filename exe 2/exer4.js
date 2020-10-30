var listA = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var listB = [0, 4, 9, 16, 25, 36, 49, 64, 81, 100];
 function ordenaNum(a, b){
   return a-b;
 }
 listA.sort(ordenaNum);
 document.write("A)");
 for (i=0; i<listA.length; i++){
   document.write(listA[i]+ ", ");
 }
 document.write("<br>");

 listB.reverse(ordenaNum);
    document.write("B)");
 for (i=0; i<listB.length; i++){
   document.write(listB[i]+ ", ");
 }
