// creating 1st prromise - always have 2 parameters
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand > 0.7) {
                resolve('YOUR FAKE DATA HERE');
            }
            reject('REQUEST ERROR')

        }, 1000)
    })
}

fakeRequest('/dogs/1')
    .then((data) => {
        console.log(`data is: ${data}`)
    })
    .catch((err) => {
        console.log(`oh no ${err}`);
    })


// creating async function
// const sing = async () => {
//     throw "ERROR";
//     return "LA LA LA LA"
// }

// sing()
//     .then(data => {
//         console.log(`promise resolved with:`, data)
//     })
//     .catch(err => {
//         console.log(`OH NO, there is a`, err)
//     })


// creating a better async function
const login = async (username, password) => {
    if (!username || !password) {
        throw 'Missing Credentials'
    }
    if (password === 'joshyboy') {
        return 'Welcome'
    }
    throw 'Invalid Password'
}

login('boob', 'joshy')
    .then(msg => {
        console.log('logged in');
        console.log(msg);
    })
    .catch(err => {
        console.log("ERROR");
        console.log(err);
    })

// using async and await
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

async function rainbow() {
    await delayedColorChange('red', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('blue', 1000);
    await delayedColorChange('indigo', 1000);
    await delayedColorChange('violet', 1000);
    return "ALL DONE";
}

async function printRainbow() {
    await rainbow();
    console.log("END OF RAINBOW");
}

printRainbow();