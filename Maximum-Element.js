// Q.2 Find the Maximum Element:Write a function to find the maximum element in an array.

const maxElement = () => {
    let array = [1,5,4,6,3,2]
    let max = array[0]
    for(let i = 0 ; i < array.length -1 ; i++){
        if(max<array[i+1]){
            max = array[i+1]
        }
    }
    console.log("max is",max)
}

maxElement()