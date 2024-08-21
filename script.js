function firstNonRepeatedChar(str) {
 // Write your code here
	function firstNonRepeatedChar(str) {
  
//  * create a frequency map; where we find all the frequency for each character
const charFreq = {}; // charFreq["Name of Field"] 
for(let char of str) {
    charFreq[char] = (charFreq[char] || 0) + 1; // Language Specific || JS 
}
 

for (let char of str) {
    if(charFreq[char] === 1) {
        return char
    }
}
return null;
}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
