function calculateMath(){
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let oper = document.getElementById('operator').value;

   if(oper === '+'){
     document.getElementById('result').value = num1 + num2;
   } else if(oper === '-'){
    document.getElementById('result').value = num1 - num2;
   } else if (oper === '*'){
    document.getElementById('result').value = num1 * num2;
   }else if(oper === '/'){
    document.getElementById('result').value = num1 / num2;
   } else{
    document.getElementById('result').innerHTML = "Invalid Syntax";
   }
  }