function allowDrop(event){
    event.preventDefault();
}
function drag(event){
    event.dataTransfer.setData("text",event.target.id);
}
function drop(event){
    event.preventDefault();//desactive interdiction et autorise le depot
    var data=event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);

    var dropTarget=event.target;
    if(!dropTarget.classList.contains("box")){
        dropTarget=dropTarget.closest(".box");
    }
    if(dropTarget){
        dropTarget.appendChild(draggedElement);
    }
}