//1
let person = {
    name: "Арсений",
    age: 18,
    greet() {
        console.log('Привет, ' + this.name + '!');
    },
    ageAfterYears(years) {
        return this.age + years;
    }
}
person.greet();
console.log(person.ageAfterYears(12));

//2
let car = {
    model: "Dodge Viper",
    year: 2021,
    getinfo() {
        console.log("Model: " + this.model);
        console.log("Year: " + this.year);
    }
}
car.getinfo();

//3
function book(title, author) {
    this.title = title;
    this.author = author;

    this.getTitle = function () {
        return this.title;
    }

    this.getAuthor = function () {
        return this.author;
    }
}

let book1 = new book("Harry Potter", "Joanne Rowling");
console.log(book1.getTitle() + ' ' + book1.getAuthor());

//4
let team = {
    players: [
        { name: "Bob", age: 19 },
        { name: "Bill", age: 18 },
        { name: "Alex", age: 20 }
    ],
    out() {
        for (var player of this.players) {
            console.log("Player: " + player.name + ". Age: " + player.age);
        }
    }
}

team.out();

//5
const counter = (function () {
    return {
        count: 0,
        increment() {
            return ++this.count;
        },
        decrement() {
            return --this.count;
        },
        getCount() {
            console.log(this.count);
        }
    }
})();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getCount());

//6
let item = {
    price: 3500,
}

Object.defineProperty(item, "price", {
    writable: true,
    configurable: true,
});

let desctriptor = Object.getOwnPropertyDescriptor(item, 'price');
alert(JSON.stringify(descriptor, null, 2));

Object.defineProperty(item, "price", {
    configurable: false,
});

let desctriptor1 = Object.getOwnPropertyDescriptor(item, 'price');
alert(JSON.stringify(descriptor1, null, 2));

//7
let circle = {
    radius: 4,
    get area() {
        return Math.PI * this.radius ** 2;
    },
    get newRadius() {
        return this.radius;
    },
    set newRadius(value) {
        this.radius = value;
    }
}
console.log(circle.area);
circle.radius = 5;
console.log(circle.radius)
console.log(circle.area);

//8
let cars = {
    make: "Ford",
    model: "Focus",
    year: 2005,
}

Object.defineProperty(cars, ...cars, {
    writable: true,
    configurable: true,
});

let desctriptor2 = Object.getOwnPropertyDescriptor(item, 'price');
alert(JSON.stringify(descriptor2, null, 2));

Object.defineProperty(cars, ...cars, {
    configurable: false,
});

let desctriptor3 = Object.getOwnPropertyDescriptor(item, 'price');
alert(JSON.stringify(descriptor3, null, 2));

//9
let arr = [1, 2, 3];

Object.defineProperty(arr, sum, {
    get() {
        let sum = 0;
        for (let i in arr) {
            sum += +i;
        }
        return sum;
    },
    writable: false,
    configurable: false,
});

//10
let rectangle = {
    width,
    height,

    get Width() {
        return this.width;
    },
    set Width(value) {
        this.width = value;
    },

    get Height() {
        return this.height;
    },
    set Height(value) {
        this.height = value;
    },

    get area() {
        return this.width * this.height; y
    }
}


rectangle.height = 3;
rectangle.width = 4;

console.log(rectangle.area);

//11
let user = {
    firstName,
    lastName,

    get fullName() {
        return "Full name " + this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1]
    }
}