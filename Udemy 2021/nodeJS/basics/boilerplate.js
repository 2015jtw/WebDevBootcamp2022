// this is a crash course on modules

// the point of this is to write a script that creates a folder with 3 files inside it


// this is how you "import" modules
const fs = require('fs');

// var that accepts an argument for the name of the folder to name
const folderName = process.argv[2] || 'Project';


// bc this is asynchronous, its console log prints after the connected one 
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("Callback ran");

//     if (err) throw err;
// });

try {
    // can also use mkdir command synchronously, so that it executes before final console i.e. in order

    fs.mkdirSync(folderName);

    fs.writeFileSync(`${folderName}/index.html`);
    fs.writeFileSync(`${folderName}/app.js`);
    fs.writeFileSync(`${folderName}/style.css`);

}
catch (e) {
    console.log(`Something went wrong: ${e}`);
}
