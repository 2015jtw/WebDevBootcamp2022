// alert('connected');

// want to write code that will make the background of body all colors of rainbow

// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "orange";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "yellow";
//         }, 1000);
//     }, 1000);
// }, 1000);

// instead of nesting all these setTimeout funcs, you can create function to effectively reuse
const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext();
    }, delay)
}

// very common way of doing dependent tasks
delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {
                    delayedColorChange('purple', 1000, () => {

                    })
                })
            })
        })
    })
});