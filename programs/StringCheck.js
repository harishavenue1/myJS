const prompt = require('prompt-sync')()
// pg1
{
    // program to check if the string is palindrome or not

    function checkPalindrome(string) {

        // find the length of a string
        const len = string.length;

        // loop through half of the string
        for (let i = 0; i < len / 2; i++) {

            // check if first and last string are same
            if (string[i] !== string[len - 1 - i]) {
                return 'It is not a palindrome';
            }
        }
        return 'It is a palindrome';
    }

    // take input
    const string = prompt('Enter a string: ');

    // call the function
    const value = checkPalindrome(string);

    console.log(value);
}

// pg2
{
    // program to check if the string is palindrome or not

    function checkPalindrome(string) {

        // convert string to an array
        const reversed = string.split('').reverse().join('');

        if (string == reversed) {
            console.log('It is a palindrome');
        }
        else {
            console.log('It is not a palindrome');
        }
    }

    //take input
    const string = prompt('Enter a string: ');

    checkPalindrome(string);
}

// pg3
{
    // program to sort words in alphabetical order

    // take input
    const string = prompt('Enter a sentence: ');

    // converting to an array
    const words = string.split(' ');

    // sort the array elements
    words.sort();

    // display the sorted words
    console.log('The sorted words are:');

    for (let element of words) {
        console.log(element);
    }
}

// pg4
{
    // program to replace a character of a string

    const string = 'Mr Red has a red house and a red car';

    // regex expression
    const regex = /red/g;

    // replace the characters
    const newText = string.replace(regex, 'blue');

    // display the result
    console.log(newText);
}

// pg5
{
    // program to check the number of occurrence of a character

    function countString(str, letter) {
        let count = 0;

        // looping through the items
        for (let i = 0; i < str.length; i++) {

            // check if the character is at that position
            if (str.charAt(i) == letter) {
                count += 1;
            }
        }
        return count;
    }

    // take input from the user
    const string = prompt('Enter a string: ');
    const letterToCheck = prompt('Enter a letter to check: ');

    //passing parameters and calling the function
    const result = countString(string, letterToCheck);

    // displaying the result
    console.log(result);
}

// pg6
{
    // program to check the occurrence of a character

    function countString(str, letter) {

        // creating regex 
        const re = new RegExp(letter, 'g');

        // matching the pattern
        const count = str.match(re).length;

        return count;
    }

    // take input from the user
    const string = prompt('Enter a string: ');
    const letterToCheck = prompt('Enter a letter to check: ');

    //passing parameters and calling the function
    const result = countString(string, letterToCheck);

    // displaying the result
    console.log(result);
}

// pg7
{
    // program to convert first letter of a string to uppercase
    function capitalizeFirstLetter(str) {

        // converting first letter to uppercase
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

        return capitalized;
    }

    // take input
    const string = prompt('Enter a string: ');

    const result = capitalizeFirstLetter(string);

    console.log(result);
}

// pg8
{
    // program to count the number of vowels in a string

    function countVowel(str) {

        // find the count of vowels
        const count = str.match(/[aeiou]/gi).length; // /g is all, /i is casesensitive

        // return number of vowels
        return count;
    }

    // take input
    const string = prompt('Enter a string: ');

    const result = countVowel(string);

    console.log(result);
}

// pg9
{
    // program to count the number of vowels in a string

    // defining vowels
    const vowels = ["a", "e", "i", "o", "u"]

    function countVowel(str) {
        // initialize count
        let count = 0;

        // loop through string to test if each character is a vowel
        for (let letter of str.toLowerCase()) {
            if (vowels.includes(letter)) {
                count++;
            }
        }

        // return number of vowels
        return count
    }

    // take input
    const string = prompt('Enter a string: ');

    const result = countVowel(string);

    console.log(result);
}

// pg10
{
    // program to check if a string starts with 'S' and ends with 'G'

    function checkString(str) {

        // check if the string starts with S and ends with G
        if (str.startsWith('S') && str.endsWith('G')) {
            console.log('The string starts with S and ends with G');
        }
        else if (str.startsWith('S')) {
            console.log('The string starts with S but does not end with G');
        }
        else if (str.endsWith('G')) {
            console.log('The string starts does not with S but end with G');
        }
        else {
            console.log('The string does not start with S and does not end with G');
        }
    }

    // take input
    let string = prompt('Enter a string: ');
    checkString(string);
}

// pg11
{
    // program to replace all occurrence of a string

    let string = 'Mr Red has a red house and a red car';

    // regex expression
    const regex = /red/gi;

    // replace the characters
    const newText = string.replace(regex, 'blue');

    // display the result
    console.log(newText);

    // program to replace all occurrence of a string

    string = 'Mr red has a red house and a red car';

    const result = string.toLowerCase().split('red').join('blue');

    console.log(result);
}

// pg12
{
    // program to format numbers as currency string

    const number = 1234.5678;

    const result = '$ ' + number.toFixed(2);

    console.log(result);
}

// pg13
{
    // program to generate random strings

    // declare all characters
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    function generateString(length) {
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length))
        }

        return result;
    }

    console.log(generateString(5));

    // program to generate random strings

    const result = Math.random().toString(36).substring(2, 7);
    console.log(result);
}

// pg14
{
    // js program to perform string comparison

    const string1 = 'JavaScript Program';
    const string2 = 'javascript program';

    // compare both strings
    const result = string1.toLowerCase() == string2.toLowerCase();

    if (result) {
        console.log('The strings are similar.');
    } else {
        console.log('The strings are not similar.');
    }
}

// pg15
{
    // program to get the file extension

    function getFileExtension(filename) {
        // get file extension
        const extension = filename.substring(filename.lastIndexOf('.') + 1, filename.length);
        return extension;
    }

    const result1 = getFileExtension('module.js');
    console.log(result1);

    const result2 = getFileExtension('test.txt');
    console.log(result2);
}

// pg16
{
    // program to remove all whitespaces in a string

    const string = '      Hello World       ';

    const result = string.split(' ').join('');

    console.log(result);
}
