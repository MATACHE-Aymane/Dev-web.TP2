var products=[
    "ordinateur Portable",
    "Smartphone",
    "Casque Audio",
    "Ecran LED",
    "Clavier Mécanique",
    "Souris Sans Fil"
]

var searchInput=document.getElementById("searchInput");
var productList=document.getElementById("productList");

// fonction pour afficher une list
function renderProducts(items){
    // items est un variable compteur / temporaire;"items" est parcouru élément par élément
    productList.innerHTML="";

    for(let product of items){
        productList.innerHTML+=`<li>${product}<li>`;
    }
    // Utilisation des backticks ` ` pour le var ${product}
}
// function renderProducts(items) {
//     productList.innerHTML = items.map(product => `<li>${product}</li>`).join("");
// }
renderProducts(products);

searchInput.addEventListener("input",function(){
    var searchTerm = searchInput.value.toLowerCase().trim();
    //toLowerCase miniscule et trim sans espace
    //Filtrage du tableau de départ
    var filterdProducts=products.filter(product=>product.toLowerCase().includes(searchTerm));
    renderProducts(filterdProducts);
});

