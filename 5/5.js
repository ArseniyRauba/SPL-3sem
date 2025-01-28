//1
//1.1
function makeCounter() {
    let currentCount = 1;

    return function () {
        return currentCount++;
    };
}

let counter1 = makeCounter();

alert(counter1());
alert(counter1());
alert(counter1());

let counter2 = makeCounter();
alert(counter2());

//1.2
let currentCount2 = 1;

function makeCounter2() {
    return function () {    
        return currentCount2++;
    };
}

let counter_strike = makeCounter2();
let counter_strike2 = makeCounter2();

alert(counter_strike());
alert(counter_strike());

alert(counter_strike2());
alert(counter_strike2());

//2
function volume(l) {
    return (w) => {
        return (h) => {
            return l * w * h;
        }
    }

}

const result1 = volume(3)(4)(5);
console.log(result1);

const h = volume(10);
let result2 = h(12)(15);
console.log(result2);
let result3 = h(14)(12);
console.log(result3);
let result4 = h(9)(14);
console.log(result4);

// volume(13)(12)(10);
// volume(13)(23)(10);
// volume(123)(32)(10);

//3
function* move() {
    let x = 0;
    let y = 0;

    let k = true;

    for (let i = 0; i < 10; i++) {
        if (k) {
            let command = prompt("left, right, up, down /stop");
            switch (command) {
                case "left":
                    x -= 1;
                    yield [x, y];
                    break;
                case "right":
                    x += 1;
                    yield [x, y];
                    break;
                case "up":
                    y += 1;
                    yield [x, y];
                    break;
                case "down":
                    y -= 1;
                    yield [x, y];
                    break;
                case "stop":
                    k = false;
                    break;
                default:
                    console.log("Error.")
                    i = 10;
                    break;
            }
        } else {
            break;
        }
    }
    return console.log(`Coordinates: (${x}, ${y})`);
}

const moving = move();

function start() {
    let result = moving.next();
    while (!result.done) {
        result = moving.next();
    }
}

start();

//4
window.num = 123;
window.string = "str";

window.a = {
    num: 234,
    string: "str1",
}

window.alert("1234");