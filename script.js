console.log('Здравствуй мир!');
let n1 = 10;
let n2 = 5;
let result;
function calculate(operation) {
    switch(operation) {
        case '+':
            result = n1+n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n1 / n2;
            break;
        default:
            result = 0;
    }
    console.log(result)
}
