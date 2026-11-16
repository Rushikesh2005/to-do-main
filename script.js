// Get HTML elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const emptyMessage = document.getElementById('emptyMessage');

// Load tasks from browser storage when page opens
loadTasks();

// Add task when user clicks "Add Task" button
addBtn.addEventListener('click', addTask);

// Add task when user presses Enter key
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// FUNCTION: Add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    
    // Don't add empty tasks
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    // Create task object
    const task = {
        id: Date.now(), // Unique ID using current time
        text: taskText,
        completed: false
    };
    
    // Add to list
    renderTask(task);
    
    // Save to browser storage
    saveTasks();
    
    // Clear input field
    taskInput.value = '';
    taskInput.focus();
    
    // Update empty message
    updateEmptyMessage();
}

// FUNCTION: Display a task on the page
function renderTask(task) {
    const li = document.createElement('li');
    li.className = 'task-item' + (task.completed ? ' completed' : '');
    li.id = 'task-' + task.id;
    
    li.innerHTML = `
        <input 
            type="checkbox" 
            class="checkbox" 
            ${task.completed ? 'checked' : ''}
            onchange="toggleTask(${task.id})"
        >
        <span class="task-text">${escapeHtml(task.text)}</span>
        <button class="deleteBtn" onclick="deleteTask(${task.id})">Delete</button>
    `;
    
    taskList.appendChild(li);
}

// FUNCTION: Mark task as complete/incomplete
function toggleTask(taskId) {
    const tasks = getTasks();
    const task = tasks.find(t => t.id === taskId);
    
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        
        // Update the visual on page
        const taskElement = document.getElementById('task-' + taskId);
        taskElement.classList.toggle('completed');
    }
}

// FUNCTION: Delete a task
function deleteTask(taskId) {
    if (confirm('Are you sure you want to delete this task?')) {
        const taskElement = document.getElementById('task-' + taskId);
        taskElement.remove();
        
        // Remove from storage
        const tasks = getTasks();
        const updatedTasks = tasks.filter(t => t.id !== taskId);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        
        updateEmptyMessage();
    }
}

// FUNCTION: Save all tasks to browser storage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll('.task-item').forEach(item => {
        const checkbox = item.querySelector('.checkbox');
        const text = item.querySelector('.task-text').textContent;
        const id = parseInt(item.id.split('-')[1]);
        
        tasks.push({
            id: id,
            text: text,
            completed: checkbox.checked
        });
    });
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// FUNCTION: Load tasks from browser storage
function loadTasks() {
    const tasks = getTasks();
    tasks.forEach(task => renderTask(task));
    updateEmptyMessage();
}

// FUNCTION: Get tasks from browser storage
function getTasks() {
    const tasksJson = localStorage.getItem('tasks');
    return tasksJson ? JSON.parse(tasksJson) : [];
}

// FUNCTION: Show/hide "No tasks" message
function updateEmptyMessage() {
    const hasTasks = taskList.children.length > 0;
    if (hasTasks) {
        emptyMessage.classList.remove('show');
    } else {
        emptyMessage.classList.add('show');
    }
}

// FUNCTION: Prevent security issues (HTML injection)
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}