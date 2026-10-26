console.log('Здравствуй мир!');

// function calculate(operation) {
//     let value_one = 10;
//     let value_two = 7
//     let result;
//     switch(operation) {
//         case '+':
//             result = value_one + value_two;
//             break;
//         case '-':
//             result = value_one - value_two;
//             break;
//         case '*':
//             result = value_one * value_two;
//             break;
//         case '/':
//             result = value_one / value_two;
//             break;
//         default:
//             result = 0;
//     }
//     console.log(result)
// }
let result = document.getElementById('result');

function addition() {
    let form = document.getElementById('myForm');
    let value_one = Number(form.elements[0].value);
    let value_two = Number(form.elements[1].value);
    result.textContent = value_one + value_two;
}

function substraction() {
    let form = document.getElementById('myForm');
    let value_one = Number(form.elements[0].value);
    let value_two = Number(form.elements[1].value);
    result.textContent = value_one - value_two;
}

function multiplication() {
    let form = document.getElementById('myForm');
    let value_one = Number(form.elements[0].value);
    let value_two = Number(form.elements[1].value);
    result.textContent = value_one * value_two;
}

function division() {
    let form = document.getElementById('myForm');
    let value_one = Number(form.elements[0].value);
    let value_two = Number(form.elements[1].value);
    result.textContent = value_one / value_two;
}