
function searchPokemon(){
    let searchInput = document.getElementById('searchBar').value.toLowerCase();
    let finder= document.getElementsByClassName('pokemon');

    for(i =0; i< finder.length; i++){ 
       let pokemonName = finder[i].querySelector('span.name').innerText.toLowerCase();
        if(!pokemonName.includes(searchInput)) {
            finder[i].style.display = "none";
        } else {
            finder[i].style.display = "flex";
        }
    } 
}