// create a for loop use psuedo code to explain the loop

// for , starts the loop
// then initialiize i, giving it a value to start at
// then give it a condition to follow, the loop will execute until conidtion is met
// the incrementor, will add from the initiliazer
// i++ really means 0 = 0 + 1
// for (let i = initializer ; condition; incrementation) {

//}


// create a loop that cycle throught the numbers
// create two variables that equal the first and second number
// add those numbers together to get the total
//then add the second and third numbers for a total and so on
// use and if statement to set a condition so that if number 1 is > number two it will select the larger sum
 



// let groupNumbers = [ [number1, number2, numTotal], [number1, number2, numTotal], [number1, number2, numTotal], [number1, number2, numTotal] ]


let numbersArray = [358276442183, 355932218848, 3554259136937, 5602212994565, 353022164588, 639921161300, 56022354427689,51087587653044, 6333641549180, 560224431936850, 5020192861974, 676324012630737, 3530627464605, 63043786670877, 372301634211413 ];

// adding a 1 to the initializer instead of zero doeesnt log the first sub array twice
// adding a -1 to the conditions will prevent it from log undefined and NaN at the last log

for (let i = 1; i < numbersArray.length -1; i++){
    
        let number1 = numbersArray[i];
        let number2 = numbersArray[i + 1];
        let numTotal = number1 + number2;

        let arrayNew = []
        arrayNew.push(number1, number2, numTotal);

        // this will log all number1, number2, numTotal
        console.log(arrayNew);
        
        // this will log the first number1, number2, numTotal
        console.log (arrayNew[i]);
        

        if ( arrayNew[i] > arrayNew[i + 1]){

            // this will log the first number1, number2, numTotal
          console.log (arrayNew[i])
        }
    }
