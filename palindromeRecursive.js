function isPalindrome(str) {
    // Preprocess the string to remove non-alphanumeric characters and convert to lowercase
    function preprocess(s) {
      return s.toLowerCase().replace(/[^a-z0-9]/g, ''); 
    }
  
    // Recursive function to check palindrome
    function checkPalindrome(s, left, right) {
      if (left >= right) {
        return true; // Base case: all characters checked
      }
      if (s[left] !== s[right]) {
        return false; // Characters don't match
      }
      return checkPalindrome(s, left + 1, right - 1); // Recursive case
    }
  
    const cleanedStr = preprocess(str);
    return checkPalindrome(cleanedStr, 0, cleanedStr.length - 1);
  }
  
  // Example 
  console.log(isPalindrome("A man, Panama")); 
  console.log(isPalindrome("racecar"));
  console.log(isPalindrome("hello")); 
 
  