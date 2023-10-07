var imageno =1;
displayimg(imageno);

function nextimg(n){
    displayimg(imageno += n)
}

function currentSlide(n){
    displayimg(imageno = n)
}

function displayimg(n){
    var i;
    var image = document.getElementsByClassName("image");
    var circles = document.getElementsByClassName("circle");

    if(n > image.length){
        imageno = 1;
    }

    if(n < 1){
        imageno = image.length;
    }

    for(i=0; i < image.length; i++){
        image[i].style.display = "none";
    }

    for(i=0; i < circles.length; i++){
        circles[i].className = circles[i].className.replace(" active", "");
    }

    image[imageno - 1].style.display ="block";
    circles[imageno - 1].className += " active";

}