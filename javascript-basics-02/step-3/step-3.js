var div=document.querySelector("div");
var input=document.querySelector("input");
input.addEventListener("change",function (){
    var value=input.value;
    div.innerHTML=value;
});
