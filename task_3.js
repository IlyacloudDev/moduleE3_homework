function getSum(number1){
    // возвращаем функцию, которая принимает доп. аргумент для получения суммы
    return function(number2){
        return number1 + number2
    }
}


// вызов функции
console.log(getSum(5)(2))
