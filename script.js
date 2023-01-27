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
    cardPokemon.className = "card_pokemon";
    cardPokemon.innerHTML = `
        <h3 class="card_name">${data.name}</h3>
        <img class="card_image" src="${data.sprites.other["official-artwork"].front_default}">
        <div class="card_information">
            <div class="information_item">
                <h4 class="information_title">Movements</h4>
                <div class="container_moves">
                    <p class="moves_item">${data.moves[getRandomInt(data.moves.length)].move.name}</p>
                    <p class="moves_item">${data.moves[getRandomInt(data.moves.length)].move.name}</p>
                    <p class="moves_item">${data.moves[getRandomInt(data.moves.length)].move.name}</p>
                    <p class="moves_item">${data.moves[getRandomInt(data.moves.length)].move.name}</p>
                </div>
            </div>
            <div>
                <h4 class="information_title">Stats</h4>
                <div class="container_stats">
                    <div class="container_item">
                        <p class="item_value">${data.stats[0].base_stat}</p>
                        <p class="item_value">${data.stats[0].stat.name}</p>
                    </div>
                    <div class="container_item">
                        <p class="item_value">${data.stats[1].base_stat}</p>
                        <p class="item_value">${data.stats[1].stat.name}</p>
                    </div>
                    <div class="container_item">
                        <p class="item_value">${data.stats[2].base_stat}</p>
                        <p class="item_value">${data.stats[2].stat.name}</p>
                    </div>
                    <div class="container_item">
                        <p class="item_value">${data.stats[3].base_stat}</p>
                        <p class="item_value">${data.stats[3].stat.name}</p>
                    </div>
                    <div class="container_item">
                        <p class="item_value">${data.stats[4].base_stat}</p>
                        <p class="item_value">${data.stats[4].stat.name}</p>
                    </div>
                    <div class="container_item">
                        <p class="item_value">${data.stats[5].base_stat}</p>
                        <p class="item_value">${data.stats[5].stat.name}</p>
                    </div>
                </div>
            </div>
        </div>
        
    `
    containerPokemons.appendChild(cardPokemon);
}

function rederMovesPokemon(moves){
    

}

let containerPokemons = document.getElementsByClassName("pokemon_container")[0]
let buttonBuscar = document.getElementById("form_btnBuscar");
buttonBuscar.addEventListener("click", function(){
    let inputBuscar = document.getElementById("form_buscar");
    buscarPokemon(inputBuscar.value);
})
