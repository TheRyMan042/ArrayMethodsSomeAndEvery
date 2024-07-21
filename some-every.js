//Ryan Hutchings
//Unit 12.2 Exercise: Practice Using .some() and .every() Methods

/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

function hasOddNumber(arr) {
    const anyOdds = arr.some(function (odd) {
        return odd % 2 === 1; //checks for only odd numbers
    });

    return anyOdds;
}

/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

function hasAZero(num) {
    //converted number to string to make an array and use the "some" method
    const anyZeros = Array.from(num.toString()).some(function (val) {
        return val === '0'; //checks for any zeros in the number
    });

    return anyZeros;
}

/*
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. 

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/

function hasOnlyOddNumbers(arr) {
    const onlyOdds = arr.every(function (odd) {
        return odd % 2 === 1; //checks for only odd numbers
    });
    return onlyOdds;
}

/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/

function hasNoDuplicates(arr) {
    newNumbers = []; //where new numbers are stored
    let aDupe = true; //starts with no duplicates
    const noDupes = arr.every(function (num) {
        //for checking any numbers already in array
        if (newNumbers.indexOf(num) === -1) {
            newNumbers.push(num);
        } else {
            aDupe = false; //if there's a duplicate, returns false
        }
        return aDupe;
    });
    return noDupes; //returns result
}

/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/

function hasCertainKey(arr, key) {
    const hasKey = arr.every(function (person) {
        return person[key]; //checks for the key on every person
    });
    return hasKey;
}

/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/

function hasCertainValue(arr, key, searchValue) {
    const sameValue = arr.every(function (obj) {
        return obj[key] === searchValue; //checks if key for each person has the same searchvalue
    });
    return sameValue;
}
