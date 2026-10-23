function demarrerProgression() {
    var barre=document.getElementById("progress-bar");
    var progression=0;
    barre.style.width="0%";
    var intervalle=setInterval(function(){
        if(progression>=100){
            clearInterval(intervalle);
        }else{
            progression+=1;
            barre.style.width=progression+"%";
        }
    },30);
}