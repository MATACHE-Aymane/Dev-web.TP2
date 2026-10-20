var input=document.getElementById("input");
var button=document.getElementById("button");
var list=document.getElementById("list");
function Ajouter(){
    //trim->supprime espaces
    if(!input.value.trim()){
        alert("you must add a value ");
    }else{
        var li=document.createElement("li");
        var span=document.createElement("span");
         var deletbtn=document.createElement('button');
        deletbtn.textContent="Supprimer";
        deletbtn.addEventListener('click',function(){
            list.removeChild(li);
        });

        span.textContent=input.value;
        li.appendChild(span);
        li.appendChild(deletbtn);
        list.appendChild(li);

        input.value="";
    }
}
