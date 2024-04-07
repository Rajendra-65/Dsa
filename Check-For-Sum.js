const checkForSum = () => {
    let array = [1,2,3,2,3,4,5]
    let sum = 9
    let match = 0
    let firstElement = 0
    let secondElement
    for(let i =1;i<=array.length;i++){
        secondElement = array[i]
        if(array[firstElement] + secondElement === sum){
            match = 1
            console.log('firstElement is',array[firstElement],'secondElement is',secondElement,'sum is',sum,'match is',match)
            break
        }else{
            firstElement++
        }
    }
    if (!match) {
        console.log('No matching elements found for the given sum.');
    }
}

checkForSum()