function reverseString(str) {
  var arr = str.split("");
  var revarr = arr.reverse();
  str = revarr.join("");
  return str;
}

console.log(reverseString("hello"));
