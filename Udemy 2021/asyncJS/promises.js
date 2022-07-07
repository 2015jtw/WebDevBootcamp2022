new Promise((resolve, reject) => {

})

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout');
            }
            else {
                resolve(`Here is your fake data: ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequest() {
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
    }
    catch (e) {
        console.log('Caught an error');
        console.log('Error is: ', e);
    }

}

fakeRequest('/dogs/1')
    .then((data) => {
        console.log('DONE WITH REQUEST')
        console.log("data is:", data)
    })
    .catch((err) => {
        console.log("Oh noo:", err);
    })

// rewrite the rainbow color function using promises to make it much simpler

//very common way of doing dependent tasks
// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {
//                     delayedColorChange('purple', 1000, () => {

//                     })
//                 })
//             })
//         })
//     })
// });

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// using implicit returns for arrow funcs means don't have to use return keyword in the .then
// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('purple', 1000))

// async function rainbow() {
//     await delayedColorChange('red', 1000)
//     await delayedColorChange('orange', 1000)
//     await delayedColorChange('yellow', 1000)
//     await delayedColorChange('green', 1000)
//     await delayedColorChange('blue', 1000)
// }

// rainbow()
//     .then(() => console.log("RAINBOW FINISHED"))

