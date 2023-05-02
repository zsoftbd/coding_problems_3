let arraySum=[10,30,43,12,32,13,43,17];
let sum=0;
for(let i=0;i<arraySum.length;i++){
    let elements=arraySum[i]
    sum = sum + elements;
}
console.log(`The array sum is ${sum}`)


function sumArray(numbers){
        let sum=0;
        for(let i=0;i<numbers.length;i++){
            let elements=numbers[i]
            sum=sum+elements;
        }return sum;
}
let numbers=[10,30,43,12,32,13,43,17]
let result=sumArray(numbers)
console.log(`The function with array sum is : ${result}`)
