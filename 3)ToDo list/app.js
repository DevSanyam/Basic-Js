// document.getElementById("addBtn").addEventListener("click", function () {
//   let text = document.getElementById("newTask").value;
//   if (text) {
//     addItem(text);
//     saveLocally(text);
//     document.getElementById("newTask").value = "";
//   }
// });
// function addItem(addTask) {
//   let ul = document.getElementById("uList");
//   let li = document.createElement("li");
//   li.innerHTML = `
//     <input type="checkbox" name="task" id="task" class="check">
//     <p>${addTask}</p>
//     <button class="delete">X</button>
//     `;
//   ul.appendChild(li);
// }

// function saveLocally(text) {
//   let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//   tasks.push(text);
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function fetchLocally() {
//   const values = JSON.parse(localStorage.getItem("tasks")) || [];
//   values.forEach((value) => {
//     addItem(value);
//   });
// }

// window.onload = function () {
//   fetchLocally();
// }

// function deleteLocally(index){
//   let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//   tasks.splice(index, 1);
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// // const list = document.getElementById("uList");

// // const btn = list.getElementsByTagName("button");
// // console.log(btn);
// // for (const delBtn of btn) {
// //   delBtn.addEventListener("click", function () {
// //     alert("Are you sure you want to delete this task?");
// //     this.parentElement.remove();
// //   });
// // }

// const list = document.getElementById("uList");

// list.addEventListener("click", function (event) {
//   if (event.target.tagName === "BUTTON") {
//     event.target.parentElement.remove();
//     const index = Array.from(list.children).indexOf(event.target.parentElement);
//     deleteLocally(index);
    
//   }
//   if (event.target.type === "checkbox") {
//     if (event.target.checked) {
//       event.target.parentElement.style.textDecoration = "line-through";
//     } else {
//       event.target.parentElement.style.textDecoration = "none";
//     }
//   }
// });



// Event Listener for the Add Button
document.getElementById("addBtn").addEventListener("click", function () {
  let text = document.getElementById("newTask").value;
  if (text) {
    addItem(text); // Add task to the UI
    saveLocally(text); // Save task to localStorage
    document.getElementById("newTask").value = ""; // Clear input field
  }
});

// Function to Add a New Task to the UI
function addItem(taskText) {
  const ul = document.getElementById("uList");
  const li = document.createElement("li");
  li.innerHTML = `
    <input type="checkbox" class="check">
    <p>${taskText}</p>
    <button class="delete">X</button>
  `;
  ul.appendChild(li);
}

// Function to Save a Task to localStorage
function saveLocally(taskText) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to Fetch Tasks from localStorage and Render Them
function fetchLocally() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    addItem(task);
  });
}

// Function to Delete a Task from localStorage by Index
function deleteLocally(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Event Listener for Task Interactions (Delete and Checkbox)
const list = document.getElementById("uList");

list.addEventListener("click", function (event) {
  // Handle Delete Button Click
  if (event.target.tagName === "BUTTON") {
    const taskItem = event.target.parentElement;
    const taskIndex = Array.from(list.children).indexOf(taskItem);

    // Remove the task from the UI
    taskItem.remove();

    // Remove the task from localStorage
    deleteLocally(taskIndex);
  }

  // Handle Checkbox Click
  if (event.target.type === "checkbox") {
    const taskItem = event.target.parentElement;
    if (event.target.checked) {
      taskItem.style.textDecoration = "line-through";
    } else {
      taskItem.style.textDecoration = "none";
    }
  }
});

// Fetch and Render Tasks on Page Load
window.onload = function () {
  fetchLocally();
};
