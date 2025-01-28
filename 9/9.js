//1
let sq = {
    name: "square",
    vertex: 4,
    color: "yellow",
    side: 10
}

let smallSq = {
    __proto__: sq,
    side: 4
}

let circle = {
    name: "circle",
    color: "white",
    radius: 5
}

let circle2 = {
    __proto__: circle,
    color: "green"
}

let triangle = {
    name: "triangle",
    color: "white",
    vertex: 3,
    side: 5,
    lines: 1
}

let triangle2 = {
    __proto__: triangle,
    lines: 3
}

console.log(circle2);
console.log(triangle2);
console.log(smallSq);

//2
class Human {
    constructor(name, surname, year, address) {
        this.name = name;
        this.surname = surname;
        this.year = year;
        this.address = address;
    }
    get age() {
        const currYear = new Date().getFullYear();
        return currYear - this.year;
    }

    set age(nAge) {
        const currYear = new Date().getFullYear();
        this.year = currYear - nAge;
    }
    newAddress(nAddress) {
        this.address = nAddress;
    }
}

class Student extends Human {
    constructor(name, surname, year, address, faculty, course, group, numBook) {
        super(name, surname, year, address);
        this.faculty = faculty;
        this.course = course;
        this.group = group;
        this.numBook = numBook;
    }
    newCourse(nCourse) {
        this.course = nCourse;
    }
    newGroup(nGroup) {
        this.group = nGroup;
    }
    getFullName() {
        return("Полное имя: " + this.name + " " + this.surname);
    }
    getFacultyCode() {
        return this.numBook.toString().charAt(0);
    }
}

class Faculty {
    constructor(nameOfFaculty, numOfGroups, numOfStudents) {
        this.nameOfFaculty = nameOfFaculty;
        this.numOfGroups = numOfGroups;
        this.numOfStudents = numOfStudents;
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
        this.numOfStudents++;
    }
    newGroups(num) {
        this.numOfGroups = num;
    }
    newNumOfStudents(num) {
        this.numOfStudents = num;
    }
    getDev() {
        return this.students.filter(student => {
            const specCode = student.numBook.toString().charAt(1);
            return specCode === '3';
        }).length;
    }
    getGroup(groupNum) {
        return this.students.filter(student => student.group === groupNum);
    }
}

let student1 = new Student("Арсений", "Рауба", 2006, "ул. Белорусская 21", "ФИТ", 2, "8", 711234501);
let student2 = new Student("Артем", "Кулешов", 2005, "Ангарская 8-4", "ФИТ", 2, "8", 731132902);
let student3 = new Student("Илья", "Старовойтов", 2005, "пр.Держинского 48-35", "ФИТ", 2, "7", 711232806);
let student4 = new Student("Антон", "Луцкий", 2005, "Свердлова 13а-324", "ФИТ", 2, "8", 711232803);

let FIT = new Faculty("ФИТ", 10, 0);
FIT.addStudent(student1);
FIT.addStudent(student2);
FIT.addStudent(student3);
FIT.addStudent(student4);

console.log(student1.getFullName());
console.log("Факультет: ", student1.faculty);
console.log("Курс студента:", student1.course);
console.log("Шифр факультета из номера зачетки:", student1.getFacultyCode());

student1.newCourse(1);
student1.newGroup(9);
console.log("Новый курс студента:", student1.course);
console.log("Новая группа студента:", student1.group);
console.log("Количество студентов ДЭВИ на факультете:", FIT.getDev());
console.log("Студенты специальности ДЭВИ:");
FIT.students.filter(student => student.numBook.toString().charAt(1) === '3').forEach(student => {
    console.log(`${student.getFullName()}, Курс: ${student.course}, Группа: ${student.group}`);
});

console.log("Студенты специальности ПОИТ:");
FIT.students.filter(student => student.numBook.toString().charAt(1) === '1').forEach(student => {
    console.log(`${student.getFullName()}, Курс: ${student.course}, Группа: ${student.group}`);
});

console.log("Студенты группы 7:");
FIT.getGroup("7").forEach(student => {
    console.log(`${student.getFullName()}, Курс: ${student.course}, Группа: ${student.group}`);
});

console.log("Студенты группы 8:");
FIT.getGroup("8").forEach(student => {
    console.log(`${student.getFullName()}, Курс: ${student.course}, Группа: ${student.group}`);
});

console.log("Студенты группы 9:");
FIT.getGroup("9").forEach(student => {
    console.log(`${student.getFullName()}, Курс: ${student.course}, Группа: ${student.group}`);
});