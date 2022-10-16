var inputString = "       Write a program         to remove all the     extra spaces         from a        paragraph/string     ";
console.log("Sample Input String :" + inputString);
var oldSentence = inputString.replace(/\s+/g, ' ').trim();
console.log("Sample Output String :" + oldSentence);