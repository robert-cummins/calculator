//Create a calculator object with entries array, total set to 0 and temp that is an empty string.
let calculator = {
    entires: [],
    total: 0,
    temp: ''
}

let screen = document.querySelector('.display');

//Create an event listener to check for what key is pressed
document.addEventListener('click', function (event) {
    let val = event.target.value;
    console.log(event.target.type);
    //If the key is a number or decimal point, add to temp and display to screen. Limit to 10 didgets.
    if (!(isNaN(val)) || val === '.') {
        calculator.temp += val;
        screen.value = calculator.temp.substring(0, 10);
    } else if (val === '÷') {
        val = '/'
    }

});


//If the key is AC, reset all values from calculator back to origional

//If the key is CE, reset the temp string and clear display

//If key pushed is X, Push temp and * to entries, display temp

//If key is ÷, push temp and / to entries, display temp

//Write a function that evaluates the entires array
//loop through the array. Convert string to number. Check what symbol and apply to next number. New varibales may be needed for this.
