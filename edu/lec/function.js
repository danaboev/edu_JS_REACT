
// const usdCurr = 28;
// const eurCurr = 30;


// function convert(amount, curr){
//     console.log(curr * amount);
// }
// convert(500, usdCurr);
// convert(500, eurCurr);

////доп урок про return

const usdCurr = 28;
const discount = 0.8

function convert(amount, curr){
    return curr * amount;
}

function promotion(result){
    console.log (result * discount);
}

promotion(convert(500, usdCurr));


