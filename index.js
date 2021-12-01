// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    let temp = location - 42;
    if (temp < 0) {
        return -temp
    }
    return temp
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, end) {
    let temp = (start - end) * 264
    if (temp < 0) {
        return -temp
    }
    return temp 
}

function calculatesFarePrice (start, end) {
    let temp = distanceTravelledInFeet(start, end);
    if (temp <= 400) {
        return 0;
    }
    else if (temp > 400 && temp < 2000) {
        return (temp-400) * .02;
    }
    else if (temp > 2000 && temp <= 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    } 
}