function valider(){
    var nom=document.getElementById("nom").value;
    var email=document.getElementById("email").value;
    if(nom&&email)
        document.getElementById("p1").innerText="le formulaire est valider";
    else
        document.getElementById("p1").innerText="le formulaire n'est pas valider";

}