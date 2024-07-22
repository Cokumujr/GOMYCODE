//Iterating with async/await

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      console.log(value);
      await delay(1000); // Delay of 1 second
    }
  }
  
  // Example 
  iterateWithAsyncAwait([1, 2, 3, 4, 5]);

  
  // handling errors with await async

  async function fetchData() {
    // Simulate an API call that might fail
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve({ data: 'API response data' });
        } else {
          reject(new Error('Failed to fetch data'));
        }
      }, 1000);
    });
  }
  
  async function awaitCall() {
    try {
      const response = await fetchData();
      console.log('Data:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  // Example 
  awaitCall();
  
  //awaiting parallel calls 

  async function fetchFromUrl(url) {
    // Simulate an API call to fetch data from the URL
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Data from ${url}`);
      }, 1000);
    });
  }
  
  async function parallelCalls(urls) {
    try {
      const promises = urls.map(url => fetchFromUrl(url));
      const responses = await Promise.all(promises);
      console.log('Responses:', responses);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  // Example 
  parallelCalls(['https://api.example.com/data1', 'https://api.example.com/data2']);
  