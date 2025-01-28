//task 1
let a = 5;
console.log("number");
let name = "Name";
console.log ("string");
let i = 0;
console.log("number");
let double = 0.23;
console.log("number");
let result = 1/0;
console.log("number, NaN");
let answer = true;
console.log("bool");
let no = null;
console.log("null");
//task 2
let sideSQ = 5;
let side1 = 45;
let side2 = 21;
console.log("Number of squares = ", (side1*side2)/sideSQ^2);
//task 3
let i_3 = 2;
let a_3 = i_3--;
let b = i_3++;
//task 4
let Kotik = "Котик";
let kotik = "котик";
let kitik = "китик";
let Kot = "Кот";
let hi = "Привет";
let bye = "Пока";
let num73 = 73;
let s53 = "53";
let f = false;
let nul = 0;
let num54 = 54;
let t = true;
let num123 = 123;
let s3 = "3";
let num3 = 3;
let mm5 = "5мм";
let num8 = 8;
let s2 = "-2";
let num34 = 34;
let s34 = "34";
let zero = null;
let undef = undefined;

console.log(num3==mm5);

let j = (Kotik > kotik) ? true : false;
console.log(j);
let j1 = (Kotik > kitik) ? true : false;
console.log(j);
let j2 = (Kot > Kotik) ? true : false;
console.log(j);
let j3 = (hi > bye) ? true : false;
console.log(j);
let j4 = (num73 > s53) ? true : false;
console.log(j);
let j5 = (f > 0) ? true : false;
console.log(j);
let j6 = (num54 > t) ? true : false;
console.log(j);
let j7 = (num123 > f) ? true : false;
console.log(j);
let j8 = (t > s3) ? true : false;
console.log(j);
let j9 = (num3 > mm5) ? true : false;
console.log(j);
let j10 = (num8 > s2) ? true : false;
console.log(j);
let j11 = (num34 > s34) ? true : false;
console.log(j);
let j12 = (zero > undef) ? true : false;
console.log(j);
//task 5
let myName = prompt("Введите имя", '');
if (myName == "Марина" || myName == "Марина Фёдоровна" || myName == "Кудлацкая Марина Фёдоровна" || myName == "Марина Федоровна"|| myName == "Кудлацкая Марина Федоровна" || myName == "МАРИНА" || myName == "МАРИНА ФЁДОРОВНА" || myName == "КУДЛАЦКАЯ МАРИНА ФЁДОРОВНА" || myName == "МАРИНА ФЕДОРОВНА" || myName == "КУДЛАЦКАЯ МАРИНА ФЕДОРОВНА"){
    console.log("Имя совпало");
} else{
    console.log("Имя не совпало");
}
//task 6
let russian = confirm("Русский сдан?");
let math = confirm ("Математика сдана?");
let eng = confirm("Английский сдан?");

if(russian&&math&&eng == true){
    console.log("Вы переведены на след. курс");
}else if(russian&&math&&eng == false && russian||math||eng == true){
        console.log("У вас пересдача");
}else if(russian&&math&&eng == false){
            console.log("Отчислен");
}
//task 7
true + true;
0 + "5";
5 + "мм";
8/Infinity;
9 * "\n9";
null - 1;
"5" - 2;
"5px" - 3;
true - 3;
7 || 0;
//task 8
for(let i = 1; i <= 10; i++){
if (i%2 == 0){ 
    console.log(i+2);
}else if(i%2 != 0){ 
    console.log(i+"мм");
}
}
//task 9
let days = ["Понедельник" , "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение"];
let s = prompt("Введите номер дня: ",'');
console.log(days[s-1]);

let Days = [{Name: "Monday", count: 1}, {Name: "Tuesday", count: 2}, {Name: "Wednesday", count: 3}, {Name: "Thursday", count: 4}, {Name: "Friday", count: 5}, {Name: "Saturday", count: 6},{Name: "Sunday", count: 7}];
let g = prompt("Введите номер дня(obj)",'');
for(let i = 0; i < 7; i++)
if(g == Days[i].count){
    console.log(Days[i].Name);
}
//task 10
let third = prompt("Введите третий параметр",'');
let k = "second";

function hello(first = "first", k, third){
    console.log(first,k,third);
}

console.log(hello(undefined, k, third));
//task 11
//declaration
let n = prompt("Введите 1-ую сторону четырехугольника",'');
let v = prompt("Введите 2-ую сторону четырехугольника",'');
function square(n,v){
    if( n==v ){
        console.log("Периметр квадрата равен: ", 2*(n+v));
    } else{
        console.log("Площадь прямоугольника равна: ", n*v);
    }
}
square(n,v);
//expression
let func = function(n,v) {
    if( n==v ){
        console.log("Периметр квадрата равен: ", 2*(n+v));
    } else{
        console.log("Площадь прямоугольника равна: ", n*v);
    }
}
console.log(func(n,v));
//arrow
let func1 = (n,v) => (n == v) ? (n*4) : (n * v);
console.log(func(n,v));