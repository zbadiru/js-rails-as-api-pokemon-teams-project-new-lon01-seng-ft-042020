const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

function parseJSONintoJSObject(JSONDataAboutTrainers) {
    return JSONDataAboutTrainers.json();
}

function getAllTrainers(){
    return fetch(TRAINERS_URL)
    .then(parseJSONintoJSObject)
    .then(renderTrainers)
}