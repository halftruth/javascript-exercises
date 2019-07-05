const removeFromArray = function(array) {
    let lengthOfArray = array.length;
    let numberOfArgs = arguments.length;

    for (let i = 1; i < numberOfArgs; i++){
        let removal = arguments[i];
        for (let j = 0; j < lengthOfArray; j++) {
            let removalCandidate = array[j];
            if (removal == removalCandidate) {
                array.splice(j,1);
            } else {
                continue;
            }
        }
    }
    return array;
}

module.exports = removeFromArray
