class Task {
    constructor(id, nameTask, condition = false) {
        this.id = id;
        this.nameTask = nameTask;
        this.condition = condition;
    }

    Rename(newName) {
        this.nameTask = newName;
    }

    NewCondition() {
        this.condition = !this.condition;
    }
}

class Todolist {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.tasks = [];
        this.currentFilter = 'all';
    }

    Rename(newName) {
        this.name = newName;
    }

    AddTask(task) {
        this.tasks.push(task);
        this.render();
    }

    Filter(filter) {
        switch (filter) {
            case 'completed':
                return this.tasks.filter(task => task.condition);
            case 'notCompleted':
                return this.tasks.filter(task => !task.condition);
            default:
                return this.tasks;
        }
    }

    Delete(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.render();
    }

    render() {
        let taskList = document.getElementById('taskList');
        taskList.innerHTML = '';

        let filteredTasks = this.Filter(this.currentFilter);
        filteredTasks.forEach(task => {
            let taskItem = document.createElement('div');
            taskItem.className = 'task-item';

            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.condition;
            checkbox.addEventListener('change', () => {
                task.NewCondition();
                this.render();
            });

            let taskName = document.createElement('input');
            taskName.type = 'text';
            taskName.value = task.nameTask;
            taskName.addEventListener('change', (event) => {
                task.Rename(event.target.value);
            });

            let editButton = document.createElement('button');
            editButton.textContent = 'Редактировать';
            editButton.addEventListener('click', () => {
                let newName = prompt('Введите новое название задачи', task.nameTask);
                if (newName) {
                    task.Rename(newName);
                    this.render();
                }
            });

            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Удалить';
            deleteButton.className = 'delete';
            deleteButton.addEventListener('click', () => {
                this.Delete(task.id);
            });

            taskItem.appendChild(checkbox);
            taskItem.appendChild(taskName);
            taskItem.appendChild(editButton);
            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);
        });
    }
    setFilter(filter) {
        this.currentFilter = filter;
        this.render();
    }
}

let list = new Todolist(1, "Учебные дисциплины");

document.getElementById('addTaskButton').addEventListener('click', () => {
    let taskNameInput = document.getElementById('taskName');
    let name = taskNameInput.value.trim();
    if (name) {
        let task = new Task(Date.now(), name);
        alert("Задача добавлена");
        list.AddTask(task);
        taskNameInput.value = '';
    }
    else{alert("Задача не добавлена");}
});

document.getElementById('showAll').addEventListener('click', () => {
    list.setFilter('all');
});

document.getElementById('showCompleted').addEventListener('click', () => {
    list.setFilter('completed');
});

document.getElementById('showNotCompleted').addEventListener('click', () => {
    list.setFilter('notCompleted');
});

