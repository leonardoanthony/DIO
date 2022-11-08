const loadMoreBtn = document.getElementById('load_more');
let offset = 0;
const limit = 12;

function loadMorePokemons(offset, limit){
    pokeapi.getPokemons(offset, limit).then(pokemons => {
        document.getElementById('pokemonsList').innerHTML += pokemons.map((pokemon) => {
            return `
                    <li class="pokemon ${pokemon.type}">
                        <span class="number">${pokemon.id}</span>
                        <span class="name">${pokemon.nome}</span>
                        <div class="details">
                
                            <div class="info">
                                <ol class="types">
                                    ${pokemon.types}
                                </ol>
                            </div>
                            <img src="${pokemon.photo}" alt="">
                        </div>
                    </li>
                    `
        }).join('');
    });
}

loadMorePokemons(offset, limit);





loadMoreBtn.addEventListener('click', () => {
    offset+= limit;
    loadMorePokemons(offset, limit);
});