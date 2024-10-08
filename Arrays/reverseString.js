function reverse(str) {
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}

function reverse2(str) {
  //check for valid input
  return str.split("").reverse().join("");
}

const reverse3 = (str) => [...str].reverse().join("");

const newString = "Hi My name is Alina";
console.log(reverse(newString));
