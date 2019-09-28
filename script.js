const baseURL = 'https://pokeapi.co/api/v2/pokemon/'
// var pokemonList = document.querySelector('ul');
let url;
const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const typeOf = document.querySelector('typeOfName')
searchForm.addEventListener("submit", fetchPokemon);

function fetchPokemon(e){
    e.preventDefault(); //stopping the event of refreshing the webpage
    url = `${baseURL}${searchTerm.value}`; //giving a value to url 'This is the order of what the url does'
    console.log('URL:', url);
    fetch(url)
        .then(function(response)  {
            console.log(response)
            return response.json();
        })
        .then(function(json) {
            console.log(json);
            displayPokemon(json)
            displayShinyPokemon(json)
            displayPokedexNumber(json)
        });
    }
    
    
    function displayPokedexNumber(json){
                let number = json.id;
                document.getElementById('pokedexNumber').innerText = number;
    }
      
                
                function displayPokemon(json) {
                   console.log('Results:', json)
                   let image1 = json.sprites.front_default;
                   document.getElementById('imageOne').src = image1;
                }
                function displayShinyPokemon(json){
                    let image2 = json.sprites.front_shiny;
                    document.getElementById('imageTwo').src = image2;
                }