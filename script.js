function buscarPokemon(pokemon){
    $.ajax({
        type: "GET",
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
        dataType: "json",
        async: true,
        success: function(data){
            renderPokeCardData(data);
        }
    })
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function renderPokeCardData(data){
    let cardPokemon = document.createElement("div");
    cardPokemon.className = `card_pokemon ${data.types[0].type.name}`;
    cardPokemon.innerHTML = `
        <h3 class="card_name">${data.name}</h3>
        <img class="card_image" src="${data.sprites.other["official-artwork"].front_default}">
        <div class="card_information">
            <div class="information_item">
                <h4 class="information_title">Movements</h4>
                ${renderContainerMovements(data.moves)}
            </div>
            <div>
                <h4 class="information_title">Stats</h4>
                ${renderContainerStats(data.stats)}
            </div>
        </div>
        
    `
    containerPokemons.appendChild(cardPokemon);
}

function renderContainerMovements(moves){
    let containerMoves = document.createElement("div");
    containerMoves.className = "container_moves";
    for (let i = 0; i < 4; i++){
        containerMoves.innerHTML+=`
            <p class="moves_item">${moves[getRandomInt(moves.length)].move.name}</p>
        `
    }
    return containerMoves.outerHTML;
}

function renderContainerStats(stats){
    let containerStats = document.createElement("div");
    containerStats.className = "container_stats";
    for (let i = 0; i<stats.length; i++){
        containerStats.innerHTML += `
            <div class="container_item">
                <p class="item_value">${stats[i].base_stat}</p>
                <p class="item_value">${stats[i].stat.name}</p>
            </div>
        `
    }
    return containerStats.outerHTML;
}


let containerPokemons = document.getElementsByClassName("pokemon_container")[0]
let buttonBuscar = document.getElementById("form_btnBuscar");
buttonBuscar.addEventListener("click", function(){
    let inputBuscar = document.getElementById("form_buscar");
    buscarPokemon(inputBuscar.value);
})
