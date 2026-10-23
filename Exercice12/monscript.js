
function updateLayout(){
    var container=document.getElementById("container");
    var windowWidth = window.innerWidth;
    if(windowWidth>600){
        container.style.gridTemplateColumns="repeat(2,1fr)";
    }else{
        container.style.gridTemplateColumns="1fr";
    }
}

updateLayout();
window.addEventListener("resize",updateLayout);
