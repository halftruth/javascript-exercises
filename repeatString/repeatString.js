const repeatString = function(string, x) {
    let stringRepeated = "";
    if (x < 0) {
        return "ERROR";
    }
    for (let i = 0; i < x; i++){
        stringRepeated += string;
    }
    return stringRepeated;
}

module.exports = repeatString
