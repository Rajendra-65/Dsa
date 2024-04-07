const removeDuplicate = () => {
    let array = [1,2,2,3,4,5,6,6,7,7,9];
    let copyChecker = 1;
    for(let i = 1; i < array.length; i++) {
        if(array[i] !== array[i - 1]){
            array[copyChecker] = array[i];
            copyChecker++;
        }
    }
    array.length = copyChecker; 
    console.log(array);
}

removeDuplicate();

