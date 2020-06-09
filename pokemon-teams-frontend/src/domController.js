const trainersList = document.querySelector("#trainer-list");

function addTrainer(trainer) {
    const div = makeTrainerCard(trainer);
    trainersList.appendChild(div);
}




function makeTrainerCard(trainer) {
    const trainerDiv = document.createElement("div");
    trainerDiv.className = "card";
    
    const p = document.createElement("p");
    trainerDiv.appendChild(p);
    p.textContent = trainer.name;
    for (let i = 0; i < trainer.pokemons.length; i++) {
        const pokemonDiv = document.createElement("div")
        const pok = trainer.pokemons[i]
        pokemonDiv.textContent =pok.nickname;
        const button = document.createElement("button");
        button.innerHTML = "Release";
        button.className = "release";
        pokemonDiv.appendChild(button)
        
        
        // const releasePokemon = document.querySelector("#release");
        // debugger
        button.addEventListener("click", function(e){
            e.preventDefault();
           e.target.parentNode.remove();
        })

        trainerDiv.appendChild(pokemonDiv);
    }

    .addEventListener("submit", function(e) {
        e.preventDefault();
        const pokemonObject = {
            id: 
            nickname:
            species:
            trainer_id:
        }
    })

    return trainerDiv;
}

function showTrainers(trainerArray) {
    for (let i = 0; i < trainerArray.length; i++) {
        addTrainer(trainerArray[i]);
    }
}
function renderTrainers(trainerArray) {
    showTrainers(trainerArray);
}