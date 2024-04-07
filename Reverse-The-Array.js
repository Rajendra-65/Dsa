// Q.1 Write a function to reverse an array in place. You'll need to manipulate array indices and possibly use a temporary variable to swap elements efficiently. The key challenge is to reverse the array without allocating extra memory or creating a new array

const ReverseTheArray = () => {
    let array = [1,2,3,4,5]
    for (let i = 0; i<array.length;i++){
        for(let j = i+1; j<array.length; j++){
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
    console.log(array)
}

ReverseTheArray()