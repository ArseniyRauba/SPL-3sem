//task 1
let arr = [1, [1, 2, [3, 4]], [2, 4]];
let preresult = arr.reduce((arr2, val) => arr2.concat(val), []);
let result = preresult.reduce((arr3, val) => arr3.concat(val), []);
console.log(result);

//task 2
function sumArr(arr) {
    return arr.reduce((sum, val) => {
        if (Array.isArray(val)) {
            return sum + sumArr(val);
        }
        return sum + val;
    }, 0);
}

console.log(sumArr(arr));

//task 3
let students = [
    { name: "Arseniy", age: 18, groupID: 8 },
    { name: "Artem", age: 18, groupID: 8 },
    { name: "Kirill", age: 13, groupID: 8 },
    { name: "Vanya", age: 9, groupID: 8 },
    { name: "Vlad", age: 15, groupID: 8 },
]

console.log(students[2].name);

function student(students) {
    return students.reduce((arr4, student) => {
        if (student.age > 17) {
            if (!arr4[student.groupID]) {
                arr4[student.groupID] = [];
            }
            arr4[student.groupID].push(student);
        }
        return arr4;
    }, {})
}

console.log(student(students));

//task 4
    let total1 = "";
    let total2 = "";
    let str = "ABC";

    for (let i = 0; i < str.length; i++) {
        total1 = String(str.codePointAt(i));
    }
    total2 = total1.replace(/7/g,'1');

console.log(total1 - total2);

//task 5
function extend(...objects) {
    console.log(objects[1]);
    return Object.assign({}, ...objects);
  }

//   console.log(extend({a: 1, b: 2}, {c: 3})); 
  console.log(extend({a: 1, b: 2}, {c: 3}, {d: 4}));
//   console.log(extend({a: 1, b: 2}, {a: 3, c: 3}));

//task 6 
function pyramid(number) {
    let tower = [];

    for (let i = 0; i < number; i++) {
        let stars = '*'.repeat(2 * i + 1);
        let spaces = ' '.repeat(number - i - 1);
        tower.push(spaces + stars + spaces);
    }

    return tower;
}

console.log(pyramid(10));