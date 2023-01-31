"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */


// Question 1
function isBoolean(input) {
        return input === true || input === false
}

console.log(isBoolean(42)); // outputs false
console.log(isBoolean("true")); // outputs false
console.log(isBoolean(false)); // outputs true


// Quesstion 2
function hasBoolean(array) {
    return array.filter(element => element === true || element === false).length > 0;
}

console.log(hasBoolean([1, 2, 3, 4])); // outputs false
console.log(hasBoolean([1, "false", 3, 4])); // outputs false
console.log(hasBoolean([1, 2, true, 4])); // outputs true


const people = [ {
    name: "Bob",
    age: 42
}, {
    name: "Sue",
    age: 27
}, {
    name: "Lou",
    age: 33
}, {
    name: "Zanzibar",
    age: 18
}, {
    name: "Gladys",
    age: 39
}
];

// Question 3
function minAge(arrayOfPeople) {
    return arrayOfPeople.reduce((youngestAge, person) => {
        if (person.age < youngestAge) {
            return person.age;
        } else {
            return youngestAge;
        }
    }, Infinity);
}

console.log(minAge(people)); // outputs 18


// Question 4
function longestName(arrayofPeople) {
    return arrayofPeople.reduce((longestName, person) => {
        if (person.name.length > longestName.length) {
            return person.name;
        } else {
            return longestName;
        }
    }, "");
}

console.log(longestName(people)); // outputs Zanzibar


// Question 5
function createPerson(name, age) {
    return {
        name: name,
        age: age
    };
}

const jimbob = createPerson("Jimbob", 22);
console.log(jimbob);
/* outputs
{
name: "Jimbob",
age: 22
}
*/