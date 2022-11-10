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

function create_card(pokemonJson){
    const pokemon = new Pokemon();
    pokemon.habilidades = pokemonJson.abilities.map(({ability}) => `<li>${ability.name.toUpperCase()}</li>`).join('');
    pokemon.nome = pokemonJson.name;
    pokemon.id = (pokemonJson.id < 10) ? '#00'+pokemonJson.id :  ((pokemonJson.id < 100) ? '#0'+pokemonJson.id : '#'+pokemonJson.id);
    pokemon.type = pokemonJson.types[0].type.name;
    pokemon.photo = pokemonJson.sprites.other.dream_world.front_default;

    let total = 0;
    pokemonJson.stats.forEach((info) => {
        total += info.base_stat;
        pokemon[info.stat.name] = info.base_stat;
    })
    pokemon.total = total;

    return pokemon;
}

pokeapi.getPokemons = async (offset = 0, limit = 3) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    const response = await fetch(url);
    const json = await response.json();
    const pokemons = json.results;
    const detailsRequest = pokemons.map(pokeapi.getPokemonDetail);
    const pokemonDetails = await Promise.all(detailsRequest);
    return pokemonDetails;
}

pokeapi.getPokemonDetail = async (pokemon) => {
    const response = await fetch(pokemon.url);
    const pokemonJson = await response.json();
    return convert_PokemonApi_To_PokemonClass(pokemonJson);
}

pokeapi.getPokemonCardDetail = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    const pokemon = await create_card(json);
    return pokemon;
}