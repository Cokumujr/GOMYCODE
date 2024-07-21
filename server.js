

const mongoose = require('mongoose');
const { Schema } = mongoose;
require('dotenv').config();

//database configuration
mongoose.connect(process.env.connectionString)
  .then(() => console.log('Database connected'))
  .catch(err => console.error(err));

// Create a person schema 
const personSchema = new Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: [String]
  });
  
  // Create a person model
  const Person = mongoose.model('Person', personSchema);
  
  // --- Create a Person Record ---
  
  // Example person object
  const johnDoe = {
    name: 'John Doe',
    age: 30,
    favoriteFoods: ['pizza', 'pasta']
  };
  
  // Create a new person instance
  const newPerson = new Person(johnDoe);
  
  // Save the person to the database
  newPerson.save()
    .then(data => console.log('Person saved successfully:', data))
    .catch(err => console.error('Error saving person:', err));
  
  // --- Create Many Records with model.create() ---
  
  const arrayOfPeople = [
    { name: 'Jane Doe', age: 25, favoriteFoods: ['sushi', 'ramen'] },
    { name: 'Alice Smith', age: 40, favoriteFoods: ['tacos', 'burritos'] },
    // Add more people as needed
  ];
  
  // Create multiple people in one call 
  Person.create(arrayOfPeople)
    .then(data => {
      console.log('People created successfully:');
      data.forEach(person => console.log(person.toObject()));
    })
    .catch(err => console.error('Error creating people:', err));
  
  // --- Use model.find() to Search Database ---
  
  const searchName = 'Alice';
  
  // Find all people named 'Alice' 
  Person.find({ name: searchName })
    .then(data => {
      console.log('People found matching "' + searchName + '":');
      data.forEach(person => console.log('-', person.name));
    })
    .catch(err => console.error('Error finding people:', err));
  
  // --- Use model.findOne() to Find by Favorite Food ---
  
  const favoriteFood = 'pizza';
  
  // Find a person who likes 'pizza' (using Promises)
  Person.findOne({ favoriteFoods: favoriteFood })
    .then(data => console.log('Person found:', data ? data.toObject() : 'No person found'))
    .catch(err => console.error('Error finding person:', err));
  
  // --- Use model.findById() to Search by _id ---
  
  const personId = '669d48c30a9b5ba09377fb26'; 
  
  // Find a person by their _id (using Promises)
  Person.findById(personId)
    .then(data => console.log('Person found:', data ? data.toObject() : 'No person found'))
    .catch(err => console.error('Error finding person:', err));
  
  // --- Classic Updates: Find, Edit, Save ---
  
  const updatePersonId = '669d48c30a9b5ba09377fb26'; 
  
  Person.findById(updatePersonId)
    .then(person => {
      if (person) {
        person.favoriteFoods.push('hamburger'); // Add "hamburger" to favorites
        return person.save(); // Save the updated person 
      } else {
        console.log('Person not found');
        return Promise.reject(new Error('Person not found')); 
      }
    })
    .then(savedPerson => console.log('Person updated:', savedPerson.toObject()))
    .catch(err => console.error('Error updating person:', err));
  
  // --- Update with model.findOneAndUpdate() ---
  
  const updatePersonName = 'Bob';
  
  // Find and update person named 'Bob', set age to 20 (using Promises)
  Person.findOneAndUpdate(
    { name: updatePersonName },
    { age: 20 },
    { new: true } // Return the updated document
  )
  .then(updatedPerson => console.log('Person updated:', updatedPerson ? updatedPerson.toObject() : 'No person found'))
  .catch(err => console.error('Error updating person:', err));
  
  // --- Delete One Document with findByIdAndDelete ---
  
  const deletePersonId = '669d48c30a9b5ba09377fb26'; 
  
  Person.findByIdAndDelete(deletePersonId)
    .then(deletedPerson => console.log('Person deleted:', deletedPerson ? deletedPerson.toObject() : 'No person found'))
    .catch(err => console.error('Error deleting person:', err));
  
  // --- Delete Many Documents with deleteMany() ---
  
  const deleteName = 'Mary';
  
  // Delete all people named 'Mary' (using Promises)
  Person.deleteMany({ name: deleteName })
    .then(result => console.log('People deleted:', result))
    .catch(err => console.error('Error deleting people:', err));
  
 // --- Chain Search Query Helpers to Narrow Search Results ---

const foodToSearch = 'burritos';

// Find people who like burritos, sort by name, limit to 2 results, and hide age
Person.find({ favoriteFoods: foodToSearch })
  .sort('name')
  .limit(2)
  .select('-age')
  .exec()
  .then(data => {
    console.log('People found:', data);
  })
  .catch(err => console.error('Error:', err));
