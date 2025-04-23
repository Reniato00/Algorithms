// How to now that a string is a palindrome

const word = "racecar";

function IsPalindome(word){
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

console.log(`The word ${word} is a Palindomre ${IsPalindome(word)}`);