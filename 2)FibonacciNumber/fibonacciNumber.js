// Find Fibonacci Sequence Number

// Fibonacci Series --> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233....

// F(0) = 0, F(1) = 1

// F(n) = F(n-1) + F(n - 2), for n > 1

// Input: n = 3 -------> Output: 2
// Need to print sum at given index

const findFibonacciSeriesNumber = (n) => {
    const array = [0, 1]

    // write a for loop to create numbers till n 
    for (let i = 2 ; i <= n; i++){
        // array[i-1] ----> last number in every array
        // array[i-2] ----> previous of last number in every array
        // Adding these two will gives the sum of fibonacci series
         array.push(array[i-1] + array[i-2])
    }
    return array[n]

}

const result = findFibonacciSeriesNumber(10)
console.log(result)