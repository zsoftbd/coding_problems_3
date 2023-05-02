// find the max vale of this number
let num1=540;
let num2=432;
let num3=645;
let num4=4534;
if(num1>num2 && num1>num3){
    console.log('num one is bigger')
}else if(num2>num3 &&num2>num1){
    console.log('num two is bigger')
}else{
    console.log("num three is bigger")
}

// simple way to find max value
let max=Math.max(num1,num2,num3,num4);
console.log(max)
