const TaskList = document.getElementById('TaskList');
const TaskInput = document.getElementById('TaskInput');
const Data = document.getElementById('Data');

function addTask() {
    const TaskText = TaskInput.value.trim ();
    if (TaskText !== ""){
        const li = document.createElement("li");
        li.innerHTML = `<span>${TaskText}</span>
        <button class="editButton" onClick="editTask(this)">✏️</button>
        <button class="removeButton" onClick="removeTask(this)">🗑️</button>`;
        TaskList.appendChild(li);
        TaskInput.Value = "";
    }
}

function editTask(button) {
    const li = button.parentElement;
    const span = li.querySelector("span");
    const NewText = prompt("Editar tarefa:", span.textContent); 
    if (NewText !== null && NewText.trim() !== "") {
        span.textContent = NewText.trim();
    }
}

function removeTask(button) {
    const li = button.parentElement;
    TaskList.removeChild(li);
   
}