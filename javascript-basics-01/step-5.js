function multiply(){
    var a=document.getElementById("first_number").value-0;
    var b=document.getElementById("second_number").value-0;
    var result=a*b;
    alert("multiplication result :"+result);
}
document.getElementById("validate").addEventListener("click",multiply);