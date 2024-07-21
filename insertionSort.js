function insertionSort(arr) {
    
    for (let i = 1; i < arr.length; i++) {
        
        let key = arr[i];
        
       
        let j = i - 1;

         // Shift all elements that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }

    return arr;
}

// Example 
const sortedArray = insertionSort([12, 11, 13, 5, 6]);
console.log(sortedArray);  
