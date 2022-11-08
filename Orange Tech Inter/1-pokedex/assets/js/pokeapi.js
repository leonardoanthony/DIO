const pokeapi = {};

function  convert_PokemonApi_To_PokemonClass(pokemonJson){
    const pokemon = new Pokemon();
    pokemon.nome = pokemonJson.name;
    pokemon.id = (pokemonJson.id < 10) ? '#00'+pokemonJson.id :  ((pokemonJson.id < 100) ? '#0'+pokemonJson.id : '#'+pokemonJson.id);
    pokemon.types = pokemonJson.types.map(({type}) => `<li class="type">${type.name.toUpperCase()}</li>`).join('');
    pokemon.type = pokemonJson.types[0].type.name;
    pokemon.photo = pokemonJson.sprites.other.dream_world.front_default;
    return pokemon;
}

pokeapi.getPokemons = (offset = 0, limit = 3) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then(response => response.json())
        .then(json => json.results)
        .then(pokemons => pokemons.map(pokeapi.getPokemonDetail))
        .then(detailsRequest => Promise.all(detailsRequest))
        .then(pokemonDetails => pokemonDetails);
}

pokeapi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then(response => response.json())
            .then(convert_PokemonApi_To_PokemonClass);
}