'use strict';
//if
if(4==4){
	console.log("true");
}
//if-else
if(4==9){
	console.log("true");
} else {
	console.log("false");
}
//if-else if-else
const num = 50;
if(num < 49){
	console.log("false");
}else if(num > 100){
	console.log("false more than 100");
}else{
	console.log("true");
}

//ternary operator
(num == 50) ? console.log("true") : console.log("false");

//switch
const number = 5;
switch(number){
	case 1:
		console.log("false 1");
		break;
	case 2:
		console.log("false 2");
		break;
	case 3:
		console.log("true 3");
		break;
	default:
		console.log("no this case");
		break;
}
//task true and false
const hamburger = true;
const fries = false;

// if(hamburger && fries)
if(hamburger ===3 && cola===2 || fries ===3 && nuggets)
	{
	console.log("I am full");
} else {
	console.log("I am hungry");
}
console.log((hamburger && fries) );

let johnReport, alexReport, samReport, mariaReport = 'done';
// if (johnReport === 'done' && alexReport === 'done' && samReport === 'done' && mariaReport === 'done') {
// 	console.log('All reports are done');
// } else {
// 	console.log('Some reports are not done');
// }

console.log(johnReport || alexReport || samReport || mariaReport);

console.log(!0); // false
console.log(!!0);


