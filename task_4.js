function getNumberFromInterval(start, end) {
    // результат для вывода изначально будет со значением, равным start
    let result = start;

    const intervalId = setInterval(function() {
        console.log(result);
        if (result >= end) {
            clearInterval(intervalId);
        }
        result++;
    }, 1000);
}


// вызов функции
getNumberFromInterval(5, 15);
