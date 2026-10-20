var images=["image1.png","image2.png","image3.png"];
var image=document.getElementsByTagName("img")[0];
var temp=0;
function suivant(){
    temp++;
    if(temp>=images.length)
        temp=0;
    image.setAttribute("src",images[temp]);}
function precedent(){
    temp--;
    if(temp<0)
        temp=images.length-1;
    image.setAttribute("src",images[temp]);}