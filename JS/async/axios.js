


const starWarsPerson = async () => {
    const res = await axios.get('https://swapi.dev/api/people/1/')
    console.log(res.data);
}

starWarsPerson();


// create dad joke everytime button is clicked, and append it to list
const jokes = document.querySelector("#jokes");
const btn = document.querySelector("button");


const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLi = document.createElement('li');
    newLi.innerText = jokeText;
    jokes.append(newLi);
}

const getDadJoke = async () => {
    const headers = { headers: { Accept: 'application/json' } };
    const res = await axios.get('https://icanhazdadjoke.com/', headers);
    return res.data.joke;
}

btn.addEventListener('click', addNewJoke);

