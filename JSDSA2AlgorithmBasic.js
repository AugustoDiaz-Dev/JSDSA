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


// 2- Reverse a String

function reverseString(str) {
  return str
  .split("")
  .reverse()
  .join("");
}

reverseString("hello");

// 3- Factorialize a Number

function factorialize(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}
factorialize(5);
// function factorialize(num) {
//   if (num === 0) {
//     return 1;
//   }
//   return num * factorialize(num - 1);
// }
// factorialize(5);

// 4- Find the Longest Word 

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// 5- Return Largest Numbers in Arrays

function largestOfFour(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// 6- Confirm the Ending

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

// 7- Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

repeatStringNumTimes("abc", 3);

// 8- Truncate a String

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// 9- Finders Keepers

function findElement(arr, func) {
  return arr.find(func);
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// 10- Boo who

function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);

// 11- Title Case a Sentence

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}

titleCase("I'm a little tea pot");

// 12- Slice and Splice

function frankenSplice(arr1, arr2, n) {
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// 13- Falsy Bouncer

function bouncer(arr) {
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);

// 14- Where do I belong

function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

getIndexToIns([40, 60], 50);

// 15- Mutations
// Declarative solution
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}

// 16- Chunky Monkey

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

