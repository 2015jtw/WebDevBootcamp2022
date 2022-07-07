const franc = require("franc");
const langs = require("langs");

const input = process.argv[2];
// const input = franc("Bonjour, je suis")

const code = franc(input);

if (code === 'und') {
    console.log("Sorry, couldn't figure out the language. Try with more smaple text");
}

else {
    const language = langs.where("3", code);
    console.log(language.name)
}



