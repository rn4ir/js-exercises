function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  var fact = num * factorialize(num - 1);
  return fact;
}

console.log(factorialize(5));
