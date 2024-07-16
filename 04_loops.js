//1.For Loop
for(let i = 1; i <=10 ; i++){
    console.log(i);
}

for( let i = 1 ; i <=10 ; i++){
    console.log(`5 x ${i} = ${5*i}`);
}

//2. While loop
let sum = 0, i = 1;
while( i <= 10){
    sum += i;
    i++;
}
console.log(sum);

let n = 10;
while( n > 0){
    console.log(n);
    n--;
}

//3. Do while loop
let j = 1;
do{
    console.log(j);
    j++;
}while(j <= 5);

let num = 5;
let factorial = 1;
do{
   factorial *= num;
   num--;
}while(num > 0);
console.log(factorial);

//4. Nested for loop

for( let row = 1  ; row <= 5 ; row++){
    let stars = '';
    for( let col = 1; col <= row ; col++){
        stars += '* ';
    }
    console.log(stars);
}

//5. Loop control statements
let p = 1;
while( p <= 10){
    if( p == 5){ 
        p++;
        continue;
    }
    console.log(p);
    p++;
}

p = 1;
while( p <= 10){
    if(p == 7){
        break;
    }
    console.log(p);
    p++;
}

