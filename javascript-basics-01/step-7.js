alert("what is your shoes size and your birth year ? ");
function result(){
    var size=document.getElementById("shoe_size").value-0;
    var birth=document.getElementById("year").value-0;
    var result=((size*2+5)*50)-birth+1766;
    alert("result : "+result);
}
document.getElementById("validate").addEventListener("click",result);