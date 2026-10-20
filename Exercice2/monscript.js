var temp=true;
function Masquer(){
    var p=document.getElementById("paragraphe");
    if(temp===true){
        p.innerText="";
        temp=false;
    }else{
        p.innerText="i am a software engineer";
        temp=true;}
}