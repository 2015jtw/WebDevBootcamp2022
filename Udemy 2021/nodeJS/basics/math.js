const add = (x, y) => x + y;

const PI = 3.1454335343;

const square = (x) => x * x;

// this is how you can add "methods" so when u run importFiles.js, you can use square and add on the terminal
module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;
