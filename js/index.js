const getPokemon = async() => {
    try {
        const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0");
        const data = await result.json();
        const pokeList = document.getElementById("poke-list");

        data.results.forEach(pokemon => {
            // Crear un elemento li
            let li = document.createElement('li'); 
            // Agregar el nombre del pokemon al li
            li.textContent = pokemon.name;
            // Agregar el li al ul
            pokeList.appendChild(li);
        })
    } catch (error) {
        console.error(error);
    }
}

getPokemon();



