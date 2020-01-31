var number;
do{
number = prompt('Please input a whole number:  ');
number = parseInt(number);//convert number to integer
}while(!Number.isInteger(number)); // if it's not an integer keep looping

function isPrime(n){
    if(n <= 1){
        return false;
    }else if(n == 2){
        return true;
    }else{
        for(var i = 2; i < n; i++ ){
            if(n % i == 0){
                return;
            }
        }
        return true;
    }
}

printPrimes(number);
function printPrimes(max){
var counter = 0;
var primes = '';
var i = 2;
while(i < max){
    if(isPrime(i)){
        counter ++;
        primes += i + ' ';
    }
    i++;
}
console.log('There are ' + counter + ' prime numbers smaller than ' + max);
if(counter > 0){
    console.log(primes);
}
}