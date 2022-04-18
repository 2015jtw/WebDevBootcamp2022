let input = prompt("what would you like to do?");
const todoList = [];

while (input !== "quit" && input !== "q") {

    if (input === "list") {
        console.log("***************");
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`)
        }
        console.log("***************");
    }

    else if (input === "new") {
        let task = prompt("What todo would you like to add to your list?");
        todoList.push(task);
        console.log(`You added the following task to your todo list: ${task}`);

    }

    else if (input === "delete") {
        const index = prompt("Enter the index you would like to delete");
        const deleted = todoList.splice(index, 1);
        console.log(`Ok, deleted: ${deleted[0]}`);
    }

    input = prompt("what would you like to do?");
}

console.log("Okay, you quit the app");