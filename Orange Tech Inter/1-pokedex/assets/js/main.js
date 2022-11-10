const loadMoreBtn = document.getElementById('load_more');
let offset = 0;
const limit = 15;
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
    const card = `<div class="about-card ${pokemon_card.type}">
                    <div class="about-title">
                        <p>${pokemon_card.nome}</p>
                        <p>HP ${pokemon_card.hp}</p>
                    </div>

                    <div class="about-image">
                        <div class="circle"></div>
                        <div class="img"><img src="${pokemon_card.photo}" alt="name"></div>
                    </div>

                    <div class="about-status">
                        <div class="habilidades">
                            <p>Habilidades</p>
                            <ol>
                            ${pokemon_card.habilidades}
                            </ol>
                        </div>
                        <div class="status">
                            <div class="status-item hp">
                                <p>HP</p>
                                <div class="progress-bar">
                                    <p>${pokemon_card.hp}</p>
                                    <div class="progress">
                                        <div style="width: ${pokemon_card.hp}%" class="bar ${pokemon_card.type}"></div>
                                    </div>
                                    <p>100</p>
                                </div>
                            </div>
                            <div class="status-item ataque">
                                <p>Ataque</p>
                                <div class="progress-bar">
                                    <p>${pokemon_card.attack}</p>
                                    <div class="progress">
                                        <div style="width: ${pokemon_card.attack}%" class="bar ${pokemon_card.type}"></div>
                                    </div>
                                    <p>100</p>
                                </div>
                            </div>
                            <div class="status-item defesa">
                                <p>Defesa</p>
                                <div class="progress-bar">
                                    <p>${pokemon_card.defense}</p>
                                    <div class="progress">
                                        <div style="width: ${pokemon_card.defense}%" class="bar ${pokemon_card.type}"></div>
                                    </div>
                                    <p>100</p>
                                </div>
                            </div>
                            <div class="status-item ataque-especial">
                                <p>Ataque Especial</p>
                                <div class="progress-bar">
                                    <p>${pokemon_card['special-attack']}</p>
                                    <div class="progress">
                                        <div style="width: ${pokemon_card['special-attack']}%" class="bar ${pokemon_card.type}"></div>
                                    </div>
                                    <p>100</p>
                                </div>
                            </div>
                            <div class="status-item defesa-especial">
                                <p>Defesa Especial</p>
                                <div class="progress-bar">
                                    <p>${pokemon_card['special-defense']}</p>
                                    <div class="progress">
                                        <div style="width: ${pokemon_card['special-defense']}%" class="bar ${pokemon_card.type}"></div>
                                    </div>
                                    <p>100</p>
                                </div>
                            </div>
                            <div class="status-item defesa-especial">
                                <p>Velocidade</p>
                                <div class="progress-bar">
                                    <p>${pokemon_card.speed}</p>
                                    <div class="progress">
                                        <div style="width: ${pokemon_card.speed}%" class="bar ${pokemon_card.type}"></div>
                                    </div>
                                    <p>100</p>
                                </div>
                            </div>
                            <div class="status-item defesa-especial">
                                <p>Total</p>
                                <div class="progress-bar">
                                    <p>${pokemon_card.total}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
    modal.innerHTML = card;
    modal.classList.add('active');                
}

modal.addEventListener('click', (e) => {
    if(e.target === modal){
        modal.classList.remove('active');
    };
});

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



