// Given an array of non-negative integers, return an array consisting of all the even elements followed by all the odd elements.
const sortByParity = () => {
    const number = [-1,-2,-3,-4,5,-9,6,7,8]
    let parityArray = []
    let negativeArray = number.filter((number) => (number<0))
    let positiveArray = number.filter((number)=>number>0)
    parityArray =  positiveArray + negativeArray 
    console.log(parityArray)
}

sortByParity()