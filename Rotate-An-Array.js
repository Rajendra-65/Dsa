// Rotate An Array by positions k

const rotateArray = () => {
    let Array = [1, 2, 3, 4, 5, 6];

    let number = -6;

    if (number < 0) {
        number = number * (1 - 2);
    }

    console.log(number);
    if(number <= Array.length){
        for (let i = 0; i < Array.length; i++) {
            if (number > 0) {
                let temp = Array[i];
                Array[i] = Array[Array.length - number];
                Array[Array.length - number] = temp;
                number--;
            }
        }
        console.log(Array)
    }else{
        console.log('canNot Rotate the positions above than the Array Length')
    }
};

rotateArray()