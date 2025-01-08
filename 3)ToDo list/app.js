document.getElementById("addBtn").addEventListener("click", function () {
  let text = document.getElementById("newTask").value;
  console.log(text);
  if (text) {
    addItem(text);
    document.getElementById("newTask").value = "";
  }
});
function addItem(addTask) {
  let ul = document.getElementById("uList");
  let li = document.createElement("li");
  li.innerHTML = `
    <input type="checkbox" name="task" id="task" class="check">
    <p>${addTask}</p>
    <button class="delete">X</button>
    `;
  ul.appendChild(li);
}

const uol = document.getElementById("uList");
const list = uol.getElementsByTagName("li");

list.forEach(li => {
  const button = li.getElementsByTagName("button")[0]; // Get the first button inside each <li>
  
  if (button) { // Check if the button exists
    button.addEventListener('click', () => {
      alert('hello');
    });
  }
});