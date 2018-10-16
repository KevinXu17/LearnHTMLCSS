var body = document.querySelector("body");
var isBlue = false;

setInterval(function() {
  if (isBlue) {
    body.style.background = "white";
  } else {
    body.style.background = "blue";
  }
  isBlue = !isBlue;
}, 1000)

//    var todos = ["Buy New Turtle"];
// window.setTimeout(function() {
//
//    var input = prompt("What would you like to do?");
//    while (input !== "quit") {
//      if (input === "list") {
//       listTodo();
//      } else if (input === "new") {
//        addNewTodo();
//      } else if (input === "delete") {
//        deleteTodo();
//      }
//      input = prompt("What would you like to do?");
//    }
//    console.log("OK, Good bye");
// }, 500)
//
// function listTodo() {
//   todos.forEach(function (a, b,c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//   });
// }
//
// function addNewTodo() {
//   var newTodo = prompt("Enter new todo: ");
//   todos.push(newTodo);
// }
//
// function deleteTodo() {
//   var deleteTodo = prompt("Enter index of todo to delete");
//  var todoBedelete =  todos.splice(deleteTodo,1);
//  console.log(todoBedelete + " is deleted");
// }
