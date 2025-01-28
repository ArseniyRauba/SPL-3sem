//1
let products1 = new Set();

function addProducts(product) {
    products1.add(product);
}

function deleteProducts(product) {
    if (products1.has(product)) {
        products1.delete(product);
    }
}

function Check(product){
    if(products1.has(product)){
        console.log("Продукт есть в списке");
    }else{
        console.log("Продукта нету в списке");
    }
}

function productcCount(){
    console.log(products1.size);
}

addProducts("Microwave");
addProducts("Telephone");
addProducts("Laptop");

deleteProducts("Laptop");

Check("Telephone");

//2
let students = new Set();
let student1 = {book: 1234567, group: 2, FIO: "Rauba Areniy"};
let student2 = {book: 2345678, group: 1, FIO: "Kuleshov Artem"};
let student3 = {book: 1235678, group: 2, FIO: "Kislyi Vladimir"};

students.set(1, student1);
students.set(2, student2);
students.set(3, student3);

function add(){
    let book = prompt("Enter a num of book.");
    let group = prompt("Enter number of group.");
    let FIO = prompt("Enter a name of student.");

    let newProduct = { book, group, FIO};
    products.set(newProduct);
}

function DeleteId() {
    let found = false;
    let numDel = prompt("Enter an num of student to delete.");
    for (let stud of students.keys) {
        if (stud == numDel) {
            students.delete(stud);
            found = true;
            console.log("Student deleted.")
        }
        if (!found) {
            console.log("Student doesnt found.");
        }
    }
}

function filter(num){
    for(let num of students.keys){
        if(num == students.keys){
            console.log(students[num]);
        }
    }
}

function sort(){
    let sortedStudents = Array.from(this.students).sort((a, b) => a.id - b.id);
        console.log(`Студенты, отсортированные по номеру зачетки:`, sortedStudents);
        return sortedStudents;
}
//3
let products = new Map();
let product1 = { namep: "Microwave", number: 12, price: "30$" };
let product2 = { namep: "Dishwasher", number: 10, price: "250$" };
let product3 = { namep: "Phone", number: 3, price: "120$" };
let product4 = { namep: "Laptop", number: 25, price: "700$" };
let product5 = { namep: "Computer", number: 9, price: "1000$" };

products.set(1, product1);
products.set(2, product2);
products.set(3, product3);
products.set(4, product4);
products.set(5, product5);

function Add() {
    let name = prompt("Enter a name of product.");
    let number = prompt("Enter number of products.");
    let price = prompt("Enter a price of product.");

    let newProduct = { name, number, price };
    products.set(newProduct);
}

function DeleteId() {
    let numDel = prompt("Enter an id of product to delete.");
    for (let prod of products.keys) {
        if (prod == numDel) {
            products.delete(prod);
        }
    }
}

function DeleteName() {
    let nameDel = prompt("Enter a name of product to delete.");

    for (let prod of products.values(namep)) {
        if (prod == nameDel) {
            products.delete(prod);
        }
    }
}

function Num() {
    let id = prompt("Enter an id of product.");
    let newNum = prompt("Enter new number of products");

    for (let num of products.values(number)) {
        if (id == products.keys()) {
            if (num == newNum) {
                products.values(number) = newNum;
            }
        }
    }
}

function Price() {
    let newNum = prompt("Enter new price of product");

    for (let num of products.values(number)) {
        if (id == products.keys()) {
            if (num == newNum) {
                products.values(number) = newNum;
            }
        }
    }
}

let numOfProd = console.log(products.size);
for (let sum of products.values(price)) {
    let amount;
    amount += sum;
}

//4
let cache = new WeakMap();

function process(obj){
    if(!cache.has(obj)){
        console.log("No cache");

        let result = obj.a + obj.b;
        obj.sum = result;
        cache.set(obj, result);
        return result;
    }
    else{
        console.log("cache");
        return cache.get(obj);
    }
}

let obj = {a: 1, b: 4};
let result1 = process(obj);
let result2 = process(obj);