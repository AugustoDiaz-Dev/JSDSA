// BASIC JS //

// Golf Code (Golf)

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);

// Replacing If Else Chains with Switch

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  switch(val) {
    case "bob": return 'Marley'
    break;
    case 42: return 'The Answer'
     break;
    case 1: return 'There is no #1'
     break;
    case 99: return 'Missed me by this much!'
     break;
    case 7: return 'Ate Nine'
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

// Counting Cards (Blackjack)

let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

// Using Objects for Lookups

function phoneticLookup(val) {
  var result = "";
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val];
  return result;
}

phoneticLookup("charlie");

// Record Collection 

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  // Access target album in record collection
  const album = records[id];
  // If value is an empty string,
  //  delete the given prop property from the album
  if (value === "") {
    delete album[prop];
  }
  // If prop isn't tracks,
  //  update or set that album's prop to value
  else if (prop !== "tracks") {
    album[prop] = value;
  }
  // If prop is tracks,
  //  add value to the end of the album's existing tracks array
  else {
    album["tracks"] = album["tracks"] || [];
    album["tracks"].push(value);
  }
  // Your function must always return the entire record collection object
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// Iterate Through an Array with a For Loop

const myArr = [2, 3, 4, 5, 6];

let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// Nesting For Loops

function multiplyAll(arr) {
  let product = 1;
for(let i = 0; i < arr.length; i ++) {
  for(let j = 0; j < arr[i].length; j++) {
    product = product * arr[i][j];
  }
}
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// Iterate with JavaScript Do...While Loops 

const myArray = [];
let i = 10;

do {
 myArray.push(i);
  i++;
}
while (i < 11);

// Replace Loops using Recursion 

function sum(arr, n) {
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n-1) + arr[n-1]
  }
}

// Profile Lookup 

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

lookUpProfile("Akira", "likes");

// Generate Random Whole Numbers with JavaScript 

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

// Generate Random Whole Numbers within a Range

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

// Use the parseInt Function with a Radix 

function convertToInteger(str) {
  return parseInt(str, 2)
 }
 
 convertToInteger("10011");

// Use the Conditional (Ternary) Operator

function checkEqual(a, b) {
  return a === b ? 'Equal' : 'Not Equal'
}

checkEqual(1, 2);

// Use Multiple Conditional (Ternary) Operators 

function checkSign(num) {
  return num > 0 ? 'positive' 
  : (num < 0) ? 'negative'
  : 'zero'
}

checkSign(10);

// Use Recursion to Create a Countdown

function countdown(n){
  return n < 1 ? [] : [n, ...countdown(n - 1)];
}

// Use Recursion to Create a Range of Numbers

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

// BASIC DATA STRUCTURES //

// Review: 8, 10, 11, 17, 18, 19, 20.

// 8- Copy an Array with the Spread Operator
// ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. The spread syntax simply looks like this: ...

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      newArr.push([...arr]);
      num--;
    }
    return newArr;
  }
  
console.log(copyMachine([true, false, true], 2));

// 10- Check for the Presence of an Element with indexOf()

function quickCheck(arr, elem) {
    if (arr.indexOf(elem) >= 0) {
      return true;
    }
    return false;
  }
  
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// 11- Iterate Through All an Array's Items Using For Loops
// JavaScript offers several built in methods that each iterate over arrays in slightly different ways to achieve different results (such as every(), forEach(), map(), etc.), however the technique which is most flexible and offers us the greatest amount of control is a simple for loop.

function filteredArray(arr, elem) {
    let newArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(elem) == -1) {
        //Checks every parameter for the element and if is NOT there continues the code
        newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
      }
    }
  
    return newArr;
  }
  
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// 17- Check if an Object has a Property
// What if we just wanted to know if an object has a specific property? JavaScript provides us with two different ways to do this. One uses the hasOwnProperty() method and the other uses the in keyword.

let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
      userObj.hasOwnProperty(name)
    );
  }
  
  console.log(isEveryoneHere(users));

// 18- Iterate Through the Keys of an Object with a for...in Statement

const yourUsers = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    let result = 0;
    for (let user in usersObj) {
      if (usersObj[user].online === true) {
        result++;
      }
    }
    return result;
  }
  
  console.log(countOnline(yourUsers));

// 19- Generate an Array of All Object keys with Object.keys()

let myUsers = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    return Object.keys(obj);
  }
  
  console.log(getArrayOfUsers(myUsers));

// 20- Modify an Array Stored in an Object

let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
     userObj.data.friends.push(friend);
    return userObj.data.friends;
  }
  
  console.log(addFriend(user, 'Pete'));

// BASIC ALGORITHM SCRIPTING

// 1- Convert Celsius to Fahrenheit

function convertCtoF(celsius) {
    let fahrenheit;
    fahrenheit = celsius * ( 9 / 5) + 32;
    return fahrenheit;
  }
  
  convertCtoF(30);
  
  //   let fahrenheit = (celsius * 1.8) + 32;
  //   let fahrenheit = celsius * (9 / 5) + 32;
  //   let celsius = (fahrenheit - 32) * (5 / 9);
  //   let celsius = fahrenheit - 32 / 1.8;

// 3- Factorialize a Number

function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
      product *= i;
    }
    return product;
  }
  factorialize(5);

// 4- Find the Longest Word 

function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length));
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");