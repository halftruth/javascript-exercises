const sumAll = function(x,y) {
    let sum = 0;
    let greater;
    let lesser;
    if (typeof x != 'number' || typeof y != 'number') {
        return 'ERROR';
    } else if ((x < 0) || (y < 0)) {
        return 'ERROR';
    } else if (x == y) {
        return sum;
    } else if (x > y) {
        greater = x;
        lesser = y;
    } else {
        greater = y;
        lesser = x;
    }

    for (let i = lesser; i <= greater; i++) {
        sum += i;
    }
    return sum;
}

module.exports = sumAll
