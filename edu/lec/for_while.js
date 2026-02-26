//while
let a = 0;
while(a < 5){
	console.log(a);
	a++;
}

//do while
let b = 0;
do{
	console.log(b);
	b++;
}while(b < 5);

//for
for(let i = 0; i < 5; i++){
	console.log(i);
}

//break
for(let i = 0; i < 10; i++){
	if(i === 6){
		break;
	}
	console.log(i);
}

//continue
for(let i = 0; i < 10; i++){
	if(i === 6){
		continue;
	}
	console.log(i);
}

//task for in for 
for(let i = 0; i < 3; i++){
	console.log(i);
	for(let j = 0; j < 3; j++){
		console.log(j);
	}
}
// task ***
let result = '';
const length = 7;

for(let i = 1; i < length; i++){
	for(let j = 0; j < i; j++){
		result += '*';
	}
	result += '\n';
}
console.log(result);
///task continue and break 

first: for(let i = 0; i < 3; i++){
	console.log(`first level ${i}`);
	for(let j = 0; j < 3; j++){
		console.log(`second level ${j}`);
		for(let k = 0; k < 3; k++){
			// if(k === 2) continue first;
			if(k === 2) break first;

		console.log(`third level ${k}`);
		}
	}
}