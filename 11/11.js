class Task {
    constructor(id, name, condition = false) {
        this.id = id;
        this.name = name;
        this.condition = condition;
    }

    Rename(newName) {
        this.name = newName;
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
    }

    Rename(newName) {
        this.name = Newname;
    }

    AddTask(task) {
        if (task instanceof Task) {
            this.tasks.push(task)
        }
    }

    Filter(isComp) {
        return this.tasks.filter(task => task.condition === isComp);
    }
}

let task1 = new Task(1, "Забрать заказ");
let task2 = new Task(2, "Купить продукты", true);
let task3 = new Task(3, "Приготовить еду");
let task21 = new Task(1, "Отчет по лр1");
let task22 = new Task(2, "Отчет по лр2", true);
let task23 = new Task(3, "Отчет по лр3");



let todolist = new Todolist(1, "Ежедневные задачи");
let todolist2 = new Todolist(2, "Домашнее задание");

todolist.AddTask(task1);
todolist.AddTask(task2);
todolist.AddTask(task3);
filtered = todolist.Filter(true);
console.log(filtered);

todolist2.AddTask(task21);
todolist2.AddTask(task22);
todolist2.AddTask(task23);

console.log(todolist);
console.log(todolist2);

task1.Rename("Забрать заказ на вб");
task1.NewCondition();
console.log(task1);

complitedTask = todolist.Filter(true);
console.log(complitedTask);
