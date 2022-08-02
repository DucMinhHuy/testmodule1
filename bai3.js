function sumOfListPrime(x){
    let n=x;
    let sum=0;
    for(let j=2;j<=n;j++){
        let count=0;
    for( let i=2;i<=j/2;i++) {
        if(j%i==0){
           count++;
           break;
        }
    }
    if(count==0){
        sum+=j;
    }
    }
    return sum;
}
let prime=+prompt("nhap")
let n=sumOfListPrime(prime);
document.write(n)
