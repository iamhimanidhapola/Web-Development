/*
+--->-
*=>+
-=>/
/=>**
*/
const add=(a,b)=>{
    console.log((a+b));
}
const mul=(a,b)=>{
    console.log((a*b));
}
const sub=(a,b)=>{
    console.log((a-b));
}
const div=(a,b)=>{
    console.log((a/b));
}
let a=(Math.random())*10
if(a>0.1){
console.log(add,add(4,3));
console.log(sub,sub(4,3));
console.log(mul,mul(4,3));
console.log(div,div(4,3));
}
else{
    console.log(add,sub(4,3));
    console.log(sub,div(4,3));
    console.log(mul,add(4,3));
    console.log(div,mul(4,3));
}