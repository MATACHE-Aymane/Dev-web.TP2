var temp=false;
function ouvrir(){
    var menu =document.getElementById("menu-content");
    if(temp){
        menu.classList.remove("open");
        temp=false;}
    else{
        menu.classList.add("open");
        temp=true;}
}