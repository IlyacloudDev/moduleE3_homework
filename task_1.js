function checkNumericElements(){
    // кол-во четных чисел
    let amountEvenNumbers = 0;
    // кол-во нечетных чисел
    let amountOddNumbers = 0;
    // нули
    let nulls = 0;
    // произвольный массив
    let arr = [0, null, NaN, 0, 1, 2, 4, "str"];

    for (let item of arr){
        if (typeof item == 'number' && !isNaN(item)){
            if (item === 0){
                nulls += 1;
            } else{
                if (item % 2 === 0){
                    amountEvenNumbers += 1;
                } else{
                    amountOddNumbers += 1;
                }
            }
        }
    }
    console.log(`Amount of even numbers: ${amountEvenNumbers}`);
    console.log(`Amount of odd numbers: ${amountOddNumbers}`);
    console.log(`Amount of nulls: ${nulls}`);
}


//вызов функции
checkNumericElements();
