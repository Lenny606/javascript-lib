export function countCharacters(str) {
    // Remove whitespace characters from the string
    let noSpaces = str.replace(/\s/g, '');
    // Return the number of characters in the resulting string
    return noSpaces.length;
}

/**
 * reverse the string using recursive function
 * 
 * 
 */

export function reverseString(str) {

    //base case
    if (str === "") {
        return "";
    }

    return reverseString(str.substring(1) + str.charAt(0))

}


export function createUrlString(str) {

    const replaceChar = {
        "á": "a",
        "č": "c",
        "ď": "d",
        "é": "e",
        "ě": "e",
        "í": "i",
        //doplnit
    }

    const stringUrl = str.toLowerCase().split(" ").join("_");
    stringUrl.replace(/[^A-Za-z]/g, char => replaceChar[char] || char)
    stringUrl.replace(/[^\w]/gi, "")

    return stringUrl;
}

// function convert to string with Base
//base2 = binary, 123 => 1010110
//base16 = hexadecimal, 123 => 7b
let randomColor = Math.floor(Math.random() * 15165543);
let convertedColor = randomColor.toString(16);