var OpenBtn=document.getElementById("OpenBtn");
var CloseBtn=document.getElementById("CloseBtn");
var modal=document.getElementById("notification");

OpenBtn.addEventListener('click',()=>{modal.classList.add('active');});
CloseBtn.addEventListener('click',()=>{modal.classList.remove('active');});

