// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    return array.slice(0,2);
}
const returnLastTwoDrivers = array => array.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = fare => {
    return function fareMultiplier(fare) {
        return fare*fare
    }
}

const fareDoubler = fare => fare*2

const fareTripler = fare => fare*3

const selectDifferentDrivers = (arrayOfDrivers, f) => {
    return f(arrayOfDrivers);
}