const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 50
let offset = 0;
let maxRecords = 251;


function loadMorePokemons(offset, limit) {
    
    pokeApi.getPokemon(offset, limit).then((pokemons=[]) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}"> 
                    <span class="number">#00${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span> 
                    <div class="detail">
                        <ol class="type">
                            ${pokemon.types
                                .map((type) => `<li class="type ${type}">${type}</li>`).join('')
                            }
                        </ol>
                        <img src="${pokemon.photo}" 
                        alt="${pokemon.name}">
                    </div>
                </li>
            `).join('')

        pokemonList.innerHTML += newHtml

    })

}

loadMorePokemons(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const nextPage = offset + limit

    if(nextPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadMorePokemons(offset, newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadMorePokemons(offset, limit)
    }
})
  


  

