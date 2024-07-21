function fibonacci(n) {
    if (n <= 1) {
      return n; // Base case: return n if it's 0 or 1
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
    }
  }
  
  // Example 
  console.log(fibonacci(0)); 
  console.log(fibonacci(1)); 
  console.log(fibonacci(5)); 
  console.log(fibonacci(10)); 
  