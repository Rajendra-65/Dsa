// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
let Array = [0,1,2,3,4,5,6,7,8,10]
let unmatchedIndex 
for( let i = 0; i < Array.length ; i++){
    if(Array[i] != i){
        unmatchedIndex = i
    }
}

console.log("unmatchedIndex is ",unmatchedIndex)