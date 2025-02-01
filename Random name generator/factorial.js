let fact=1;
let n=5;
for(let i=1;i<=n;i++){
    fact=fact*i;
}
console.log("without recursion " + fact);

//using recursion
let facti=5;
let m=5;
facto=(a)=>{
    if(m<1){
        return 1;
    }
    else{
        return a*facto(m-1);
    }
    }
    console.log("using recursion " + fact);
