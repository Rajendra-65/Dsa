// Maximum SubArrays

Array = [94,88,87,65,878,99]
let sortedArray = []
let firstElement = 0
for(let i = 1 ; i < Array . length ; i ++ ){
    const sum = Array[firstElement] + Array[i]
    sortedArray.push(sum)
    firstElement++
}

sortedArray.sort((a, b) => a - b)

console.log(sortedArray)
let number = sortedArray[sortedArray.length-1]
console.log(number)
let sum = 0
if(number<10){
    console.log('the number is single digit and sum of itz number is',number)
}else{
    while(number>1){
        let remainder = number % 10
        sum = sum + parseInt(remainder)
        number = number /10
    }
    console.log('the sum of the biggest number is ',parseInt(sum))
}
