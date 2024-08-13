let tasks = [];

let currentTaskIndex = null;

// Function to handle form submission
document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Get form input values
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-desc').value;
    const dueDate = document.getElementById('task-due').value;

    if (currentTaskIndex === null) {
        const newTask = {
            title: title,
            description: description,
            dueDate: dueDate
        };

        tasks.push(newTask);
    } else {
        updateTask(currentTaskIndex, title, description, dueDate);
    }

    // Display the tasks
    displayTasks();

    // Clear the form fields after submission
    document.getElementById('task-form').reset();
    currentTaskIndex = null; 
});

// Function to update an existing task
function updateTask(index, title, description, dueDate) {
    tasks[index] = {
        title: title,
        description: description,
        dueDate: dueDate
    };
}

// Function to display all tasks in the task list
function displayTasks() {
    const taskList = document.getElementById('tasks');
    taskList.innerHTML = ''; 

    tasks.forEach((task, index) => {
        // Create a list item for each task
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <strong>${task.title}</strong> - ${task.description} (Due: ${task.dueDate})
            </div>
            <div>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="removeTask(${index})">Delete</button>
            </div>
        `;

        // Append the task to the task list
        taskList.appendChild(li);
    });
}

// Function to populate the form with task details for editing
function editTask(index) {
    const task = tasks[index];

    // Populate form fields with the task details
    document.getElementById('task-title').value = task.title;
    document.getElementById('task-desc').value = task.description;
    document.getElementById('task-due').value = task.dueDate;

    currentTaskIndex = index;
}

// Function to remove a task with confirmation
function removeTask(index) {
    // Show a confirmation dialog
    const confirmation = confirm('Are you sure you want to delete this task?');

    if (confirmation) {
        tasks.splice(index, 1);
        displayTasks();
    }
}
