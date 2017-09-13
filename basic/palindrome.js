function palindrome(str) {
  var charstr = str.replace(/[\W_]/g, "");  
  var lower = charstr.toLowerCase();
  var revstr = lower.split("").reverse().join("");
  
  if (lower === revstr) {
    return true;
  }
  else {
    return false;
  }
}

console.log(palindrome("eye"));
