var img1=document.querySelector("#image1");
img1.addEventListener("mouseover",img2);
img1.addEventListener("mouseout",function (){
    img1.src="images/image1.jpg";
});
function img2(){
    img1.src="images/image1_2.jpg";
}
