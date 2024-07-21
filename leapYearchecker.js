function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true; // Divisible by 400
        } else {
          return false; // Divisible by 100 but not 400
        }
      } else {
        return true; // Divisible by 4 but not 100
      }
    } else {
      return false; // Not divisible by 4
    }
  }
  
  // Example 
  console.log(isLeapYear(2020)); 
  console.log(isLeapYear(1900)); 
  console.log(isLeapYear(2000)); 
  console.log(isLeapYear(2021)); 
  