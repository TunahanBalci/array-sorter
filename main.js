var input = [5,2,2,2,2,2,2,2,2,3,4,6,1,1,1,1,1,7];
console.log("\n Given numbers: " + input);
var sorted = [];

let number = 0;
while (number < input.length * 2){
    for (let number2 = input.length - 1; number2 >= 0; number2--){
        if (input[number] == input[number2] && number == number2 + 1){
            input.splice(number, 1);
            // console.log (" number = " + number + ", number2 = " + number2); // FOR DEBUG
    };
        if (input[number] == input[number2] && number != number2){
            input.splice(number2, 1);
            // console.log (" number = " + number + ", number2 = " + number2); // FOR DEBUG
    };
}
    number++;
};

let loopNumber = 0;
while(loopNumber < 999999999999999999999999999999){
    for (let number3 = 0; number3 < input.length; number3++){
        let value = 0;
        for (let number4 = input.length - 1; number4 >= 0; number4--){
            if (input[number3] < input[number4]){
                // console.log("number4: " + number4); // FOR DEBUG
                value++;
        };
    }
        if (value == input.length - 1){
            sorted.push(input[number3]);
            input.splice(number3, 1);
            
        }

    };
    if (input.length == 0){
        break;
    }
};

// console.log("\n input: " + input); // FOR DEBUG
// console.log("\n sorted: " + sorted + "\n"); // FOR DEBUG
console.log("\n Sorted numbers: " + sorted + "\n");

