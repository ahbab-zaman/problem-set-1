// Task 1

// Write a function to convert temperature from Celsius to Fahrenheit.

// (0°C × 9/5) + 32 = 32°F

// function temperature(celsius){
//     const fer = celsius * 9 / 5 + (32); 
//     return fer;
// }
// console.log(temperature(40) , 'degree');

// Task 2

//** celsius to kelvin

// function temperature(celsius){
//     const kelvin = celsius + 273.15;
//     return kelvin;
// }
// console.log(temperature(34));

// Task 3

//** fahrenheit to kelvin

// function temperature(far){
//     const kelvin = (far + 32) * (5 / 9) + 273.15;
//     return kelvin;
// }
// console.log(temperature(300));

// Task 4

// You are given an array of numbers. Count how many times the a number is repeated in the array.

// let numbers = [2, 2, 4, 5, 6, 5, 8];
// function repeatedLetter(arr){
//     let newArr = [];
//     for(i of arr){
//         if (newArr.includes(i) === false) {
//             newArr.push(i);
//         }
//     }
//     return newArr;
// }
// console.log(repeatedLetter(numbers));


// Task 5

// Write a function to count the number of vowels in a string.

// function countVowels(str){
//     let word = "aeiouAEIOU";
//     let vowel = 0;
//     for( item of str){
//         if(word.includes(item)){
//             vowel++;
//         }
//     } 

//     return vowel;
// }
// console.log(countVowels("ahbabuzzaman TAHMIM"));

// Task 6

// Write a function to find the longest word in a given string.

// function findLongestWord(str){
//     let words = str.split(' ');
//     let longest = '';
//    for(i =0; i < words.length; i++){
//     if (words[i].length > longest.length) {
//         longest = words[i];
//     }
//    }
//    return longest;
// }
// console.log(findLongestWord("I am a programmer"));


// Task 7

// Generate a random number between 10 to 20.

// function randomNumber(num1){
//    return Math.floor(Math.random() * 10 + (10));
// }
// console.log(randomNumber());