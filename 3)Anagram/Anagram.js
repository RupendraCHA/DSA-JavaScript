// Shortest Word Distance

/* An anagram is a word (or) phrase formed by rearranging
the letters of a different word (or) phrase, using all the original letters exactly once */

// 1) Input -- s = anagram, t = nagaram ===> output = true
// 2) Input -- s = rat, t = cat ===> output = false


// Steps:

// 1) convert given words into an array using split("")  string method
// 2) sort the array - which arranges the words in increasing order
// 3) compare both words are with same sequence, it means they are anagrams words


const findAnagramOrNot = (s, t) => {
    // Convert into an array
    let firstWord = s.split("").sort().join("")
    let secondWord = t.split("").sort().join("")
    
    isAnagramWord = firstWord === secondWord
    console.log(isAnagramWord)
}

// findAnagramOrNot("anagram", "nagaram")
// findAnagramOrNot("rat", "cat")
// findAnagramOrNot("moonnoon", "noonmoon")

// Second Approach

const anagram2 = (s, t) => {
    if (s.length !== t.length) return false

    let obj1 = {}
    let obj2 = {}

    for (let i = 0; i < s.length; i++){
        obj1[s[i]] = (obj1[s[i]] || 0) +  1
        obj2[s[i]] = (obj2[s[i]] || 0) +  1
    }

    for (const key in obj1){
        
        if (obj1[key] !== obj2[key]) return false
    }

    return true
}
console.log(anagram2("anagram", "nagaram"))
