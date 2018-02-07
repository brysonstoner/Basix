//use tdd to write a javascript function to count the vowels in a string.
var string = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";



// function getVowels(string) {
//     var vowelCount = string.match(/aeiou]/gi);
//     return vowelCount === null ? 0 : vowelCount.length;
//     console.log(vowelCount);
// }

function getVowels(str) {
   var vowelsCount = 0;

    var string = str.toString();

    for (var i = 0; i < stringLength - 1; i++) {

        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
            vowelsCount += 1;
        }
        console.log(vowelsCount);
    }
    return vowelsCount;
}
getVowels(string);

