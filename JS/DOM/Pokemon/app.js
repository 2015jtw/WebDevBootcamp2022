// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 1; i <= 151; i++) {
    // create HTML element for the div, span and img
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    // add the inner Text for span
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    // add the img src for the pokemons by using the baseURL and iterating with i
    newImg.src = `${baseURL}${i}.png`
    // append img and span to the div, and the div to the container
    pokemon.append(newImg);
    pokemon.append(label);
    container.append(pokemon);
}
