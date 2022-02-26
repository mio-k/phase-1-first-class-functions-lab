// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
    return [arr[0], arr[1]];
}
const returnLastTwoDrivers = function(arr){
    return [arr[arr.length-2], arr[arr.length-1]];
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(multiplier) {
    return function(fare) {
       return multiplier * fare;
   }
} 

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare);
}
const fareTripler = function(fare){
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(arr, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arr);
}