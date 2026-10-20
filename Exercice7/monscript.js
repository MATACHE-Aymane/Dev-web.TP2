var startTime=Date.now();
function updateTimer(){
    var currentTime=Date.now();
    var second=Math.floor((currentTime-startTime)/1000);
    // Math.floor() valeur entier
    document.getElementById('timer').textContent=second;
}
setInterval(updateTimer,1000);