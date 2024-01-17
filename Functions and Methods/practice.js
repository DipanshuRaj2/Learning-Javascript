// Create a function using the "function " keyword that takes a String as an argument & returns the number of vowels in the string.

// function countVowels(str){
//     let count = 0;
//     for(let i = 0; i<str.length; i++){ //for(let char of str)
//         if(str [i]=== 'a' ||str[i] === 'e' ||str[i] === 'i' ||str[i] === 'o' || str[i] === 'u')
//             count++;
//     }
//     return count;
// }

// console.log(countVowels("dipanshu"));

// Create a function using the " Arrow function " keyword that takes a String as an argument & returns the number of vowels in the string.

const vowelCount = str => {
    let count = 0;
    for (let char of str) {

        if (char === 'a' ||
            char === 'e' || 
            char === 'i' || 
            char === 'o' || 
            char === 'u')
            count++;
    }
    return count;
};
console.log(vowelCount("dipanshu"));
