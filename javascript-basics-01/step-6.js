function remainder(){
    var a=document.getElementById("first_number").value-0;
    var b=document.getElementById("second_number").value-0;
    var division=a/b;
    var rem=a%b;
    alert("remainder of the division "+a+"/"+b+"is: "+rem);
}
document.getElementById("validate").addEventListener("click",remainder);