const reverseString = function(string) {
    let stringChars = string.split("");
    let stringReversed = "";

    for (let i = stringChars.length - 1; i >= 0; i--) {
        stringReversed += stringChars[i];
    }
    return stringReversed;
}

module.exports = reverseString
