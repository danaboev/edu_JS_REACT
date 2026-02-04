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
