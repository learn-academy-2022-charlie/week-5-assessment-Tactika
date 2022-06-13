// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

/* ---------------------- Question One ----------------------
1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
*/
// a) Create a test with expect statements using the variables provided.
describe("h4x0rL4ng", () => {
    it("Takes in a string and returns a coded message.", () => {
        const secretCodeWord1 = "Lackadaisical"
        const secretCodeWord2 = "Gobbledygook"
        const secretCodeWord3 = "Eccentric"

        const expected1 = "L4ck4d41s1c4l"
        const expected2 = "G0bbl3dyg00k"
        const expected3 = "3cc3ntr1c"

        expect(h4x0rL4ng(secretCodeWord1)).toEqual(expected1)
        expect(h4x0rL4ng(secretCodeWord2)).toEqual(expected2)
        expect(h4x0rL4ng(secretCodeWord3)).toEqual(expected3)
    })
})

/* Red Test Failed Successfully
    FAIL  ./code-challenges.test.js
    h4x0rL4ng
    × Takes in a string and returns a coded message. (1 ms)                                                                                                                           
    ReferenceError: h4x0rL4ng is not defined
*/

// b) Create the function that makes the test pass.

/* Pseudo Code - h4x0rL4ng
    Function Name: h4x0rL4ng
    Parameters: 1 x string called lameString
    Logic:
        - Takes in any string
        - Create a new variable named h4x0rStr to store edited string
        - Search through string to find all a's, replace with 4's
        - Complete the same task for e, i, and o with 3, 1, and 0 being the replacements
        - Return the newly edited string 
*/

// const h4x0rL4ng = lameString => {
//     let h4x0rStr = lameString.replace(/a/gi, "4").replace(/e/gi, "3").replace(/i/gi, "1").replace(/o/gi, "0")
//     return h4x0rStr
// }

/* Green Test Passed Successfully
    PASS  ./code-challenges.test.js
    h4x0rL4ng
        √ Takes in a string and returns a coded message. (2 ms)  
*/

/* Refactor */

const h4x0rL4ng = lameString => lameString.replace(/a/gi, "4").replace(/e/gi, "3").replace(/i/gi, "1").replace(/o/gi, "0")

/* ---------------------- Question Two ----------------------
2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.
*/

// a) Create a test with expects statement using the variable provided.
describe("findIt", () => {
    it("Takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {
        const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
        const letterA = "a"
        const expected1 = ["Apple", "Banana", "Orange"]
        const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
        const letterE = "e"
        const expected2 = ["Cherry", "Blueberry", "Peach"]

        expect(findIt(arrayOfWords1, letterA)).toEqual(expected1)
        expect(findIt(arrayOfWords2, letterE)).toEqual(expected2)
    })
})

/* Red Test Failed Successfully
    FAIL  ./code-challenges.test.js
    h4x0rL4ng
        √ Takes in a string and returns a coded message. (2 ms)
    findIt                
        × Takes in an array of words and a single letter and returns all the words that contain that particular letter.
    ReferenceError: findIt is not defined
*/

// b) Create the function that makes the test pass.

/* Pseudo Code - findIt
    Function Name: findIt
    Parameters: 
        - 2 parameters, 
        - 1 array of words called wordsArray
        - 1 string containing a single character
    Logic:
        - create new array to store found words
        - iterate over each word in array
        - if word in array includes the supplied letter
        - return item to new array of filtered items 
        - return new list of words that all contain the letter supplied
*/

const findIt = (wordsArray, letter) => {
    const foundWords = []

    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].includes(letter) || wordsArray[i].includes(letter.toUpperCase())) {
            foundWords.push(wordsArray[i])
        }
    }
    return foundWords
}

/* Green Test Passed Successfully
FAIL  ./code-challenges.test.js
    h4x0rL4ng
        √ Takes in a string and returns a coded message. (3 ms)                                                                                                                                 
    findIt
        √ Takes in an array of words and a single letter and returns all the words that contain that particular letter.
    checkFullHand
        × Takes in an array of 5 numbers and determines whether or not the array is a full house.  
*/

/* Refactor */

/* ---------------------- Question Three ----------------------
// 3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.
*/

// a) Create a test with expect statements using the variable provided.
describe("checkFullHand", () => {
    it("Takes in an array of 5 numbers and determines whether or not the array is a full house.", () => {
        const hand1 = [5, 5, 5, 3, 3]
        const expect1 = true
        const hand2 = [5, 5, 3, 3, 4]
        const expect2 = false
        const hand3 = [5, 5, 5, 5, 4]
        const expect3 = false

        expect(checkFullHand(hand1)).toEqual(expect1)
        expect(checkFullHand(hand2)).toEqual(expect2)
        expect(checkFullHand(hand3)).toEqual(expect3)
    })
})

/* Red Test Failed Successfully

    FAIL  ./code-challenges.test.js
    h4x0rL4ng
        √ Takes in a string and returns a coded message. (3 ms)
    findIt
        × Takes in an array of words and a single letter and returns all the words that contain that particular letter. (1 ms)
    checkFullHand
        × Takes in an array of 5 numbers and determines whether or not the array is a full house.
*/

// b) Create the function that makes the test pass.

/* Pseudo Code - checkFullHand
    Function Name: checkFullHand
    Parameters: 1 array of numbers, called handArray
    Logic:
        - Iterate over array of numbers
        - Count occurrence of each number and put it in an object with the count
        - if there are 2 unique numbers and one doesn't equal a count of 1, return true
        - If there are more than 2 unique numbers, return false
*/

const checkFullHand = handArray => {
    const cardCount = {}
    for (const card of handArray) {
        cardCount[card] = cardCount[card] ? cardCount[card] + 1 : 1
    }

    if (Object.keys(cardCount).length === 2 && !Object.values(cardCount).includes(1)) {
        return true
    } else {
        return false
    }
}

/* Green Test Passed Successfully
    PASS  ./code-challenges.test.js
    h4x0rL4ng
        √ Takes in a string and returns a coded message. (6 ms)                                                                                                                   
    findIt
        √ Takes in an array of words and a single letter and returns all the words that contain that particular letter.                                                           
    checkFullHand
        √ Takes in an array of 5 numbers and determines whether or not the array is a full house.
*/