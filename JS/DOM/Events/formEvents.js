const form = document.querySelector("form");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");

form.addEventListener('submit', (e) => {
    // prevents form from doing normal submit behaviour - doesn't take you to new screen
    e.preventDefault();
    console.log(input.value);
    // capture input value into var and create li and fill it with the input value
    const catName = input.value;
    const newLi = document.createElement('li');
    newLi.innerText = catName;

    // append the new li with input value to the cat list
    list.append(newLi);

    // just to make the input field empty after submitting
    input.value = '';

})