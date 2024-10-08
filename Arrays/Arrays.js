const strings = ["a", "b", "c", "d"];

// console.log(strings[2]);

strings.push("e"); //O(1)
console.log(strings);

strings.pop(); // O(1)
console.log(strings);

//add to beginning
strings.unshift("-a"); // O(n)
console.log(strings);

//remove from beginning
strings.shift(); // O(n)
console.log(strings);

//add in the middle
strings.splice(2, 0, "y");
console.log(strings);
