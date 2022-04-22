// default params
function message(person, msg = "hi there") {
    console.log(`${msg} ${person}`);
}

// spread in array literals
const cats = ['cat', 'che', 'pasha'];
const dogs = ['casey', 'joe', 'rusty', 'whiskey'];

const allPets = [...cats, ...dogs];

// spread in object literals
const felines = {
    legs: 4,
    family: 'Felidacae'
};

const canines = {
    isFurry: true,
    family: 'Caninae'
};

const allAnimals = { ...felines, ...canines, family: "Worden Pets" }


// rest params
function sum(...nums) {
    console.log(nums);
}

// rest params with multiple args
function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO ${gold}`);
    console.log(`SILVER MEDAL GOES TO ${silver}`);
    console.log(`THANKS TO ALL OTHER PARTICIPANTS: ${everyoneElse}`);
}


// destructuring arrays
const scores = [43, 553, 6777, 2334, 332, 334];

const [gold, silver] = scores;


// destructuring object
const user = {
    name: 'josh',
    email: '2015jtw',
    password: '1234',
    id: '12355539',
    language: 'english'
}

// creates 3 vars for name, email and language
const { name, email, language } = user;