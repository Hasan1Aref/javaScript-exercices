function age(){
    var a=document.getElementById("age").value;
    if(a>18){
        alert("you are over 18 ");
    }
    if(a<18){
        alert("you are under 18");
    }
    if(a==18){
        alert("you are 18");
    }
}
document.getElementById("validate").addEventListener("click",age);