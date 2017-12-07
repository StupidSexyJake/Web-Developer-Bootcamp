var todos = ["Example to do item"];
var input = prompt("What would you like to do?");

function listTodos() {
    console.log("**********");
    todos.forEach(function (todo, index) {
        console.log(index + ": " + todo);
    })
    console.log("**********");
}
function addTodos() {
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("New task added: " + newTodo);
}
function deleteTodos() {
    var deleteTodo = prompt("Enter the index of the item to delete");
    console.log("Task deleted: " + todos[deleteTodo]);
    todos.splice(deleteTodo, 1);
}

while (input !== "quit") {
    if (input === "list") { listTodos(); }
    else if (input === "new") { addTodos(); }
    else if (input === "delete") { deleteTodos(); }
    input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");