function getDate(){
   var todaydate = new Date();
   var day = todaydate.getDate();
   var month = todaydate.getMonth() + 1;
   var year = todaydate.getFullYear();
   var datestring = month + "/" + day + "/" + year;

   document.getElementById("frmDate").value = datestring;
  } 
getDate();

function myFunction1(){
    var first1 = document.getElementById("no_of_units1").value; 
    var second1 = document.getElementById("textbox1").value; 
    
    var x = document.getElementById("textbox1").value;
    var textbox1 = document.getElementById("textbox1");
    textbox1.value = x;

    var answer1 =parseFloat(first1) * parseFloat(second1);
    var amount1 = document.getElementById("amount1");
    amount1.value = "$ " + answer1 + ".00";

    var first2 = document.getElementById("no_of_units2").value; 
    var second2 = document.getElementById("textbox2").value; 
    
    var y = document.getElementById("textbox2").value;
    var textbox2 = document.getElementById("textbox2");
    textbox2.value = y;

    var answer2 =parseFloat(first2) * parseFloat(second2);
    var amount2 = document.getElementById("amount2");
    amount2.value = "$ " + answer2 + ".00";


    var first3 = document.getElementById("no_of_units3").value; 
    var second3 = document.getElementById("textbox3").value; 
    
    var z = document.getElementById("textbox3").value;
    var textbox3 = document.getElementById("textbox3");
    textbox3.value = z;

    var answer3 =parseFloat(first3) * parseFloat(second3);
    var amount3 = document.getElementById("amount3");
    amount3.value = "$ " + answer3 + ".00";


    var first4 = document.getElementById("no_of_units4").value; 
    var second4 = document.getElementById("textbox4").value; 
    
    var a = document.getElementById("textbox4").value;
    var textbox4 = document.getElementById("textbox4");
    textbox4.value = a;

    var answer4 =parseFloat(first4) * parseFloat(second4);
    var amount4 = document.getElementById("amount4");
    amount4.value = "$ " + answer4 + ".00";


    var first5 = document.getElementById("no_of_units5").value; 
    var second5 = document.getElementById("textbox5").value; 
    
    var b = document.getElementById("textbox5").value;
    var textbox5 = document.getElementById("textbox5");
    textbox5.value = b;

    var answer5 =parseFloat(first5) * parseFloat(second5);
    var amount5 = document.getElementById("amount5");
    amount5.value = "$ " + answer5 + ".00";


    var answer6 =parseFloat(answer1) + parseFloat(answer2) + parseFloat(answer3) + parseFloat(answer4) + parseFloat(answer5);
    var amount6 = document.getElementById("amount6");
    amount6.value = "$ " + answer6 + ".00";
}