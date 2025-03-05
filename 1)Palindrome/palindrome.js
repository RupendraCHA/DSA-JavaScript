// Write program to check wether given number is a palindrome or not

// Input x = 121 ------> Output: true
// Input x = 10 ------> Output: false

const isPalindrome =  (number) => {
    // Convert number into string
    inToString = (number).toString()

    // Convert string into array
    stringToArray = inToString.split("")

    // reverse an array
    reversedArray = stringToArray.reverse()

    // Join the array of numbers
    joinedNumbers = reversedArray.join("")

    // Convert reversed string to number
    reversedNumber = +joinedNumbers

    // Check given number is a palindrome after comparing given number and reversed number
    isEqual = number === reversedNumber
    console.log(isEqual)
}

isPalindrome(121)
isPalindrome(10)