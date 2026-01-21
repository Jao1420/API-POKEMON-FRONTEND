const offset=0
const limit=10
const url=`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
function convertPokemonToLi(pokemon, number) {
    return ` <li class="pokemon"> 
                <span class="number">#00${number}</span>
                <span class="name">${pokemon.name}</span> 
                <div class="detail">
                    <ol class="type">
                        <li class="type">Fire</li>
                        <li class="type">nosé</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png" 
                    alt="${pokemon.name}">
                </div>
            </li>`
}
const pokemonList = document.getElementById('pokemonList')
fetch(url)

    .then((response) => response.json())
    .then((data) => data.results)
    .then((pokemons) => {
        for( let i=0; i<pokemons.length; i++){
            const pokemonName = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemonName, i+2)
        }

    })
    .catch((error) => console.log(error))


  

