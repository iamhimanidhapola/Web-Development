//Random name generator 
let obj={
    1:"crazy",
    2:"Amazing",
    3:"Fire"
}
let obj1={
    1:"Engine",
    2:"foods",
    3:"Garments"
}
let obj2={
    1:"Bros",
    2:"Limited",
    3:"Hub"
}
let random1=Math.floor(Math.random()*3)+1;
let random2=Math.floor(Math.random()*3)+1;
let random3=Math.floor(Math.random()*3)+1;
console.log(obj[random1]+" "+obj1[random2]+" "+obj2[random3]);