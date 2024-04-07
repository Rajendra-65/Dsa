// Given an array nums of n integers, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

const Array = [1,2,3,4,5]

let outputArray = []

for( let i = 0 ; i < Array.length ; i++){
    let productArray = Array.filter(number => number!=Array[i])
    let temp = 1
    for(let j = 0; j < productArray.length; j++){
        temp = temp * productArray [j]
    }
    outputArray.push(temp)
}

console.log(outputArray)