// 1- Sum All Numbers in a Range

function sumAll(arr) {
    const [first, last] = [...arr].sort((a, b) => a - b);
    return first !== last
      ? first + sumAll([first + 1, last])
      : first;
  }
  
  sumAll([1, 4]);

  // 2- Diff Two Arrays

  function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// 3- Seek and Destroy

function destroyer(arr) {
    const valsToRemove = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
      return !valsToRemove.includes(val);
    });
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// 4- Wherefore art thou

function whatIsInAName(collection, source) {

    const souceKeys = Object.keys(source);
  
    return collection.filter(obj => souceKeys
        .map(key => obj.hasOwnProperty(key) && obj[key] === source[key])
        .reduce((a, b) => a && b));
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

  // 5- Spinal Tap Case

  function spinalCase(str) {

    return str
      .split(/\s|_|(?=[A-Z])/)
      .join("-")
      .toLowerCase();
  }
  
  spinalCase('This Is Spinal Tap');

  // 6- Pig Latin

function translatePigLatin(str) {
let consonantRegex = /^[^aeiou]+/;
let myConsonants = str.match(consonantRegex);
return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant");

// 7- Search and Replace

function myReplace(str, before, after) {
// Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1)
} else {
    after = after[0].toLowerCase() + after.substring(1)
}

// return string with argument "before" replaced by argument "after" (with correct case)
return str.replace(before, after);
}


myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// 8- DNA Pairing

function pairElement(str) {
//create object for pair lookup
var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
};
//split string into array of characters
var arr = str.split("");
//map character to array of character and matching pair
return arr.map(x => [x, pairs[x]]);
}

pairElement("GCG");

// 9- Missing letters

function fearNotLetter(str) {
let currCharCode = str.charCodeAt(0);
let missing = undefined;

str
    .split("")
    .forEach(letter => {
    if (letter.charCodeAt(0) === currCharCode) {
        currCharCode++;
    } else {
        missing = String.fromCharCode(currCharCode);
    }
    });

return missing;
}
  
fearNotLetter("abce");

// 10- Sorted Union

function uniteUnique(...arr) {
    return [...new Set(arr.flat())];
  }
  
  // Or as an arrow function
//   const uniteUnique = (...arr) => [...new Set(arr.flat())];
  
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// 11- Convert HTML Entities

function convertHTML(str) {
// Use Object Lookup to declare as many HTML entities as needed.
const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
};
//Use map function to return a filtered str with all entities changed automatically.
return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}

// 12- Sum All Odd Fibonacci Numbers

function sumFibs(num) {
let prevNumber = 0;
let currNumber = 1;
let result = 0;
while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
    result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
}

return result;
}

sumFibs(4);

// 13- Sum All Primes

function sumPrimes(num) {
    // Check all numbers for primality
    let primes = [];
    for (let i = 2; i <= num; i++) {
      if (primes.every((prime) => i % prime !== 0))
        primes.push(i);
    }
    return primes.reduce((sum, prime) => sum + prime, 0);
  }

sumPrimes(10);

// 14- Smallest Common Multiple

function smallestCommons(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const range = Array(max - min + 1)
      .fill(0)
      .map((_, i) => i + min);
    // Largest possible value for SCM
    const upperBound = range.reduce((prod, curr) => prod * curr);
    // Test all multiples of 'max'
    for (let multiple = max; multiple <= upperBound; multiple += max) {
      // Check if every value in range divides 'multiple'
      const divisible = range.every((value) => multiple % value === 0);
      if (divisible) {
        return multiple;
      }
    }
  }
  
  smallestCommons([1,5]);

// 15- Drop it

function dropElements(arr, func) {
    let sliceIndex = arr.findIndex(func);
    return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
    }
  
  
dropElements([1, 2, 3], function(n) {return n < 3; });

// 16- Steamroller

function steamrollArray(arr) {
    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);

// 17- Binary Agents

function binaryAgent(str) {
    return String.fromCharCode(
      ...str.split(" ").map(function(char) {
        return parseInt(char, 2);
      })
    );
  }
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// 18- Everything Be True

function truthCheck(collection, pre) {
    // Create a counter to check how many are true.
    let counter = 0;
    // Check for each object
    for (let c in collection) {
      // If it is has property and value is truthy
      if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
        counter++;
      }
    }
    // Outside the loop, check to see if we got true for all of them and return true or false
    return counter == collection.length;
  }
  
  truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");

// 19- Arguments Optional

function addTogether() {
    const [first, second] = arguments;
    if (typeof(first) !== "number")
      return undefined;
    if (arguments.length === 1)
      return (second) => addTogether(first, second);
    if (typeof(second) !== "number")
      return undefined;
    return first + second;
  }
  
  addTogether(2,3);
  
// 20- Make a Person

const Person = function(firstAndLast) {
    let fullName = firstAndLast;
  
    this.getFirstName = function() {
      return fullName.split(" ")[0];
    };
  
    this.getLastName = function() {
      return fullName.split(" ")[1];
    };
  
    this.getFullName = function() {
      return fullName;
    };
  
    this.setFirstName = function(name) {
      fullName = name + " " + fullName.split(" ")[1];
    };
  
    this.setLastName = function(name) {
      fullName = fullName.split(" ")[0] + " " + name;
    };
  
    this.setFullName = function(name) {
      fullName = name;
    };
  };
  
  const bob = new Person('Bob Ross');
  bob.getFullName();

// 21- Map the Debris

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    return arr.map(({ name, avgAlt }) => {
      const earth = earthRadius + avgAlt;
      const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
      return { name, orbitalPeriod };
    });
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);


