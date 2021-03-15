var img = document.querySelector("img");
img.addEventListener("mouseout", function () {
    if (img.id == "image1") {
        img.src = "images/image1_2.jpg";
    } else if (img.id == "image2") {
        img.src = "images/image2_2.jpg";
    } else if (img.id == "images/image3_2.jpg") {
        img.src = "images/image4_2.jpg";
    } else if (img.id == "images/image5_2.jpg") {
        img.src = "images/image5_2.jpg";
    } else 
    img.src="images / image1.jpg";
    img.src="images / image2.jpg";
    img.src="images / image3.jpg";
    img.src="images / image4.jpg";
    img.src="images / image5.jpg";

});
