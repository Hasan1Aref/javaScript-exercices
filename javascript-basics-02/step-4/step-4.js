var reset=document.querySelector("button");
reset.addEventListener("click",function (){
    var r=prompt("yes/no");
    if(r!="yes"&&r!="no"){
        alert("please enter \"yes or no only ");
    }
    if(r=="yes"){
document.getElementById("name").value="";
document.getElementById("surname").value="";
document.getElementById("city").value="";
    }
});