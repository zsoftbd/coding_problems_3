let duplicateNumber=[2,4,6,5,7,9,2,3,5,56,70,2,4,6]
let uniqueNumber=[]
for(let i=0;i<duplicateNumber.length;i++){
    let elements=duplicateNumber[i]
    let index=uniqueNumber.indexOf(elements)
    if(index == -1){
        uniqueNumber.push(elements)
    }
}
console.log(uniqueNumber)