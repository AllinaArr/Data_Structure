function reverse(str) {
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}

const newString = "Hi My name is Alina";
console.log(reverse(newString));
