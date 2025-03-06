// Two Sum

// Gives an array of integer nums and an target integer

// return indices of the two numbers such that the integers at the 
// indices sum will be equal to the target value

// Input: nums = [2, 7, 11, 15], target = 9 => Output: [0, 1] (Because nums[0] + nums [1] === 9, we return [0, 1])
 
// Input: nums = [3, 2, 4], target = 6 => Output: [1, 2]

const twoSum = (numsArray, target) => {
    for (let i = 0 ; i < numsArray.length ; i++) {

        for (let j = i+1; j < numsArray.length; j++){
            
            if (numsArray[i] + numsArray[j] === target) return [i, j]
        }
    }
}

console.log(twoSum([2, 7, 11, 15, 7, 8], 15))

