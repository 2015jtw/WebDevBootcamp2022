const form = document.querySelector("#searchForm");

// write function that will search tv shows and display their image
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    console.log("SUBMITTED");

    // extract the user input text in the textbox
    const searchTerm = form.elements.query.value

    // send get request with tv maze api to return tv shows object for the searchTerm
    const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`)
    console.log(response.data);

    createImages(response.data);

    form.elements.query.value = "";

})

const createImages = (shows) => {

    for (let result of shows) {
        // find and display the pictures of tv shows
        if (result.show.image) {
            const newImg = document.createElement("img");
            newImg.src = result.show.image.medium;
            document.body.append(newImg);
        }

    }
}
