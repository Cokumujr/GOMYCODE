function analyzeSentence(sentence) {
    // Ensure the sentence ends with a period
    if (sentence[sentence.length - 1] !== '.') {
        throw new Error('Sentence must end with a period.');
    }

    
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // Define vowels
    const vowels = 'aeiouAEIOU';

    // Loop through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        // Count the length of the sentence
        length++;

        // Count the number of words
        if (char === ' ' || char === '.') {
            if (i > 0 && sentence[i - 1] !== ' ' && sentence[i - 1] !== '.') {
                wordCount++;
            }
        }

        // Count the number of vowels
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    // To include the last word in the word count if it's not followed by a space before the period
    if (sentence[sentence.length - 2] !== ' ' && sentence[sentence.length - 2] !== '.') {
        wordCount++;
    }

    return {
        length,
        wordCount,
        vowelCount
    };
}

// Example 
const result = analyzeSentence("Hello world. This is a test.");
console.log(result);
