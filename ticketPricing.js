function getTicketPrice(age) {
    let price;
    
    switch (true) {
      case (age <= 12):
        price = 10; // Price for children
        break;
      case (age >= 13 && age <= 17):
        price = 15; // Price for teenagers
        break;
      case (age >= 18):
        price = 20; // Price for adults
        break;
      default:
        price = 0; // In case of invalid age (negative numbers, etc.)
        break;
    }
    
    return price;
  }
  
  // Example 
  console.log(getTicketPrice(10)); 
  console.log(getTicketPrice(15)); 
  console.log(getTicketPrice(25)); 
  console.log(getTicketPrice(-5)); 
  