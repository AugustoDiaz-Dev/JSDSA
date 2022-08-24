// 1 Use an Array to Store a Collection of Data (one-dimensional array)

let yourArray = ["Argentina", true, 1983, {name: "augusto"}, 11];

// 2 Access an Array's Contents Using Bracket Notation

let myArray = ["a", "b", "c", "d"];
myArray[1] = "my letter b"
console.log(myArray);

// 3 Add Items to an Array with push() and unshift()

function mixedNumbers(arr) {
  arr.unshift('I', 2, 'three')
  arr.push(7, 'VIII', 9)
    return arr;
  }
  
console.log(mixedNumbers(['IV', 5, 'six']));

// 4- Remove Items from an Array with pop() and shift()

function popShift(arr) {
    let popped = arr.pop(); 
    let shifted = arr.shift(); 
    return [shifted, popped];
  }
  
console.log(popShift(['challenge', 'is', 'not', 'complete']));

// 5- Remove Items Using splice()
// splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array.

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
  arr.splice(1, 4)
console.log(arr);

// 6- Add Items Using splice()
// splice() can take up to three parameters. The first is the index at which to start changing the array. The second is the number of elements to remove. The third is the number of elements to add.

function htmlColorNames(arr) {
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond")
     return arr;
   }
   
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

// 7- Copy Array Items Using slice()
// Rather than modifying an array, slice() copies or extracts a given number of elements to a new array, leaving the array it is called upon untouched. slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index).
function forecast(arr) {
    return arr.slice(2, 4);
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

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

// 9- Combine Arrays with the Spread Operator
// Another huge advantage of the spread operator is the ability to combine arrays, or to insert all the elements of one array into another, at any index. 
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence= ["learning", ...fragment, "is", "fun"]; 
    return sentence;
  }
  
  console.log(spreadOut());

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

// 12- Create complex multi-dimensional arrays

let myNestedArray = [
    'level 1',                   /* myNestedArray[0]             */
   ['level 2'],	               /* myNestedArray[1][0]          */
   [['level 3','deep']],	       /* myNestedArray[2][0][0]       */
   [[['level 4','deeper']]],    /* myNestedArray[3][0][0][0]    */
   [[[['level 5','deepest']]]]  
 ];

// 13- Add key-value pairs to JavaScript objects
// You can use dot or bracket notation to add a new property to an object.
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  foods.bananas = 13;
  foods["grapes"] = 35;
  foods.strawberries = 27;
  
  console.log(foods);

  // 14- Modify an Object Nested Within an Object. 

  let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  userActivity.data.online = 45;
  console.log(userActivity);

// 15- Access property Names with Bracket Notation

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    return foods[scannedItem];
  }
  
  console.log(checkInventory("apples"));

// 16- 

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  delete foods.oranges;
  delete foods.plums;
  delete foods.strawberries;
  
  console.log(foods);

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