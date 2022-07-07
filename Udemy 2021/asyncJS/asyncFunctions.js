
// bc of keyword async --> func will automatically return a promise
async function hello() {
}

// also works on arrow funcs
const sing = async () => {
    return "LALALALA"
}

sing()
    .then(data => {
        console.log("promise resolved with", data)
    })

const login = async (username, password) => {
    if (!username || !password) {
        throw "Missing Credentials"
    }
    if (password === "korgi feet are cute") {
        return 'welcome'
    }
    throw "Invalid Password"
}

login('fdsafdds', 'korgi feet are cute ')
    .then(message => {
        console.log("Logged in!");
        console.log(message);
    })
    .catch(err => {
        console.log("Error")
        console.log(err)
    })

