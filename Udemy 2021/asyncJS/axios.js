axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
    .then(res => {
        console.log(res.data.ticker.price)
    })
    .catch(err => {
        console.log("ERROR", err);
    })

const fetchBitCoinPrice = async () => {
    try {
        const res = await axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
        console.log(res.data.ticker.price)
    }
    catch (e) {
        console.log("ERROR", e)
    }
}

// function to generate random dad jokes using api
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get("https://icanhazdadjoke.com/", config)
        // console.log(res.data.joke);
        // returning this instead of printing it, so that it can be used in function below
        return res.data.joke
    }
    catch (e) {
        return "NO JOKES AVAILABLE"
    }

}

// created html button, that when clicked generates dad joke
const jokes = document.querySelector("#jokeContainer");
const jokeButton = document.querySelector("#joke");

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    // console.log(jokeText)
    const newLi = document.createElement("li");
    newLi.append(jokeText);
    jokes.append(newLi)

}

jokeButton.addEventListener('click', addNewJoke);