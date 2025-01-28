//task 1
function basicOperation(operation, value1, value2){
    let result;
    if(operation == '+'){
        result = value1 + value2;
    }
    if(operation == '-'){
        result = value1 - value2;
    }
    if(operation == '*'){
        result = value1 * value2;
    }
    if(operation == '/'){
        result = value1 / value2;
    }
    return result;
}
let result1 = basicOperation('+',5,10);
console.log(result1);

//task 2
function cube(n){
    let m = 0;
    for(let i = 1; i <= n; i++){
        m += i * i * i;
    }
    return m;
}
let result2 = cube(3);
console.log(result2);

//task 3
let nums = new Array; 

// function average(nums){
//     let num = 0 ;
//     for(let i = 0; i < nums.length ;i++){
//         num+=nums[i];
//     }
//     let avg = num/nums.length;
//     return avg;
// }
// let result3 = average([1,2,3,4,5]);
// console.log(result3);

let average = function(nums){
    let num = 0 ;
    for(let i = 0; i < nums.length ;i++){
        num+=nums[i];
    }
    let avg = num/nums.length;
    return avg;
};
console.log(average([1,2,3,4,5]));

//task 4
function reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90 || str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122) {
            result += str[i];
        }
    }
    return result;
}
console.log(reverseString("JavaScr53э? ipt"));
//task 5
function repeat(numb, str5){
    return str5.repeat(numb);
}
let result5 = repeat(3,"Hello");
console.log(result5);

//task 6
let arr1 = new Array;
let arr2 = new Array;
let arr3 = new Array;

function string (arr1, arr2){
    for(let i = 0; i < arr1.length; i++){
        let flag = true;
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                flag = false;
                break;
            }
        }
        if(flag){
            arr3.push(arr1[i]);
        }
    }
    return arr3;
}
result6 = string(["1","2","3"], ["2","3","4"]);
console.log(result6);
