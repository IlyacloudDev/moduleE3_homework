function primeNoPrimeNumber(number) {
    // переменная для булевого типа, простое ли число
    let primeValue = false;
    // вывод в консоль
    let result = ``;

    if (number <= 1 || number > 1000) {
        result = `Данные неверны!`;
    } else {
        primeValue = true;
        if (number === 2 || number === 3) {
            primeValue = true;
        } else if (number % 2 === 0 || number % 3 === 0) {
            primeValue = false;
        } else {
            for (let i = 5; i * i <= number; i += 6) {
                if (number % i === 0 || number % (i + 2) === 0) {
                    primeValue = false;
                    break;
                }
            }
        }
        result = `Число простое - ${primeValue}`;
    }

    return result;
}

// вызов функции
console.log(primeNoPrimeNumber(0)); 
console.log(primeNoPrimeNumber(4)); 
console.log(primeNoPrimeNumber(17));


