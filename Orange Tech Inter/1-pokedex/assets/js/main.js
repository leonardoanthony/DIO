const loadMoreBtn = document.getElementById('load_more');
let offset = 0;
const limit = 1;
const max = 151;
const modal = document.querySelector('.about-modal');

function loadMorePokemons(offset, limit){
    pokeapi.getPokemons(offset, limit).then(pokemons => {
        document.getElementById('pokemonsList').innerHTML += pokemons.map((pokemon) => {
            return `
                        <li id="${pokemon.id}" data-url="https://pokeapi.co/api/v2/pokemon/${pokemon.nome}" class="pokemon ${pokemon.type}">
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
        let pokemonEl = document.querySelectorAll('.pokemon');
        pokemonEl.forEach((pokemon) => {
            pokemon.addEventListener('click', () => {
                pokeapi.getPokemonCardDetail(pokemon.dataset.url)
                    .then((card) => openCard(card));
                
            });
        })
    });
}

function openCard(pokemon_card){
    const card = `<div class="about-card fire">
                    <div class="about-title">
                        <p>Bulbasaur</p>
                        <p>HP 45</p>
                    </div>

                    <div class="about-image">
                        <div class="circle"></div>
                        <div class="img"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg" alt="name"></div>
                    </div>

                    <div class="about-status">
                        <div class="habilidades">
                            <p>Habilidades</p>
                            <ol>
                                <li>hab1</li>
                                <li>hab2</li>
                            </ol>
                        </div>
                        <div class="status">
                            <div class="status-item hp">
                                <p>HP</p>
                                <div class="progress-bar">
                                    <p>45</p>
                                    <div class="progress">
                                        <div class="bar fire"></div>
                                    </div>
                                    <p>100</p>
                                </div>
                            </div>
                            <div class="status-item ataque">
                                <p>Ataque</p>
                                <div class="progress-bar">
                                    <p>45</p>
                                    <div class="progress">
                                        <div class="bar fire"></div>
                                    </div>
                                    <p>100</p>
                                </div>
                            </div>
                            <div class="status-item defesa">
                                <p>Defesa</p>
                                <div class="progress-bar">
                                    <p>45</p>
                                    <div class="progress">
                                        <div class="bar fire"></div>
                                    </div>
                                    <p>100</p>
                                </div>
                            </div>
                            <div class="status-item ataque-especial">
                                <p>Ataque Especial</p>
                                <div class="progress-bar">
                                    <p>45</p>
                                    <div class="progress">
                                        <div class="bar fire"></div>
                                    </div>
                                    <p>100</p>
                                </div>
                            </div>
                            <div class="status-item defesa-especial">
                                <p>Defesa Especial</p>
                                <div class="progress-bar">
                                    <p>45</p>
                                    <div class="progress">
                                        <div class="bar fire"></div>
                                    </div>
                                    <p>100</p>
                                </div>
                            </div>
                            <div class="status-item defesa-especial">
                                <p>Velocidade</p>
                                <div class="progress-bar">
                                    <p>45</p>
                                    <div class="progress">
                                        <div class="bar fire"></div>
                                    </div>
                                    <p>100</p>
                                </div>
                            </div>
                            <div class="status-item defesa-especial">
                                <p>Total</p>
                                <div class="progress-bar">
                                    <p>45</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
    modal.innerHTML = card;
    modal.classList.add('active');                
}

loadMorePokemons(offset, limit);

loadMoreBtn.addEventListener('click', () => {
    offset += limit;

    let next = offset + limit;
    if(next >= max){
        let newLimit = max - offset;
        loadMorePokemons(offset, newLimit);
        loadMoreBtn.style.display = 'none';
    }else{
        loadMorePokemons(offset, limit);
    }
});



