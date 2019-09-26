//Create a calculator object with entries array, total set to 0 and temp that is an empty string.
let calculator = {
    entires: [],
    total: 0,
    temp: ''
}

let click = new Audio('click.wav');
let screen = document.querySelector('.display');

//Create an event listener to check for what key is pressed
document.addEventListener('click', function (event) {
    let val = event.target.value;
    if (event.target.type === 'button') {
        click.play();
    }
    //If the key is a number or decimal point, add to temp and display to screen. Limit to 10 didgets.
    if (!(isNaN(val)) || val === '.') {
        calculator.temp += val;
        screen.value = calculator.temp.substring(0, 10);
        //Handle operators    
    } else if (val === '÷') {
        operator('÷');
    } else if (val === 'x') {
        operator('x');
    } else if (val === '+') {
        operator('+');
    } else if (val === '-') {
        operator('-');
        //Handle Cancle button    
    } else if (val === 'C') {
        cancle();
    //Handle evaluate button    
    } else if (val === '=') {
        evaluate(calculator.entires);
    }

});

//Function to handle operators
function operator(op) {
    calculator.entires.push(calculator.temp);
    calculator.temp = '';
    if (op === '÷') {
        val = '/';
    } else if (op === 'x'){
        val = '*';
    } else {
        val = op;
    }
    calculator.entires.push(val);
    screen.value = '';
}


//Write a function that evaluates the entires array
//loop through the array. Convert string to number. 
function evaluate(arr) {
    calculator.entires.push(calculator.temp);
    calculator.total = parseInt(arr[0]);
    for (i = 0; i < arr.length; i++){
        
        if (!(isNaN(arr[i]))) {
            if (arr[i + 1] === '+') {
                calculator.total += parseInt(arr[i + 2]);
            } else if (arr[i + 1] === '-') {
                calculator.total -= parseInt(arr[i + 2]);
            } else if (arr[i + 1] === '/') {
                calculator.total /= parseInt(arr[i + 2]);
            } else if (arr[i + 1] === '*') {
                calculator.total *= parseInt(arr[i + 2]);
            }
        }
    }
    calculator.entires = [];
    calculator.entires.push(calculator.total);
    calculator.temp = calculator.total;
    screen.value = calculator.total;
}

//Function to handle cancle button
function cancle() {
    calculator.entires = [];
    calculator.total = 0;
    calculator.temp = '';
    screen.value = '';
}