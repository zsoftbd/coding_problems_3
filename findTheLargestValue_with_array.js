let marks=[10,30,45,65,12,32,12,34,5,67,89,1,2,3,6,8,9,109]
let max=marks[0]
for(let i=0;i<marks.length;i++){
    let elements=marks[i]
    if(elements>max){
        max=elements;
    }
}
console.log(`The highest value is ${max}`)
