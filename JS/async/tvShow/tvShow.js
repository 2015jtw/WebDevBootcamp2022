const form = document.querySelector("#searchForm");

form.addEventListener('submit', async function (e) {
    // prevent form when doing default submit behaviour
    e.preventDefault();

    // select the value of the input query
    const searchTerm = form.elements.query.value;

    // use the get http verb to select the tv show we want
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);

    // select the tv show's img
    // console.log(res.data[0].show.image.medium);

    // call makeImgs func
    makeImgs(res.data);

    // clear input
    form.elements.query.value = '';


})

const makeImgs = (shows) => {
    // use loop to show all the tv shows with same name
    for (let result of shows) {
        // create conditional if tv show doesn't have img
        if (result.show.image) {
            // create an img and append the show's img src to it --> append img with src to the body
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }

    }
}