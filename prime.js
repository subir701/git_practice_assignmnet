// Check whether the given number is a prime number or not
//Intialize number
let num=13;
let count=0;
// use loop for checking number is prime or not
for(let i=0 ; i<num ; i++){
    if(num % i == 1){
        count+=1;
    }
}
if(count == 2){
    console.log("It is a prime number");
}else{
    console.log("It is not a prime number");
}