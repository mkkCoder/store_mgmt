const express = require('express');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/items');
const db = require('./data_access/db'); // Your database connection
const Item = require('./models/item'); // Import the Item model

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

app.use('/api', itemRoutes);

// a function that uses mongoose to connect to MongoDB
async function connectToMongoDB() {
  try {
    await mongoose.connect(db.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}

// Initialize function to be run when the app starts
async function initializeApp() {
  try {
    // Your database initialization code goes here
    // For example, you can connect to the database or seed initial data
    // console.log(db.mongoURI)
    await connectToMongoDB();
    await Item.deleteMany({});
    // Create and save three items to the database
    const itemsToAdd = [
      {
        _id: new mongoose.Types.ObjectId(),
        name: 'cocaine',
        description: 'intense feeling of happiness, sexual arousal, loss of contact with reality',
        category: 'tropane alkaloid',
        quantity: 50,
      },
      {
        _id: new mongoose.Types.ObjectId(),
        name: 'marihuana',
        description: 'Relieves pain and discomfort (chillin)',
        category: 'drug medicine',
        quantity: 50,
      },
      {
        _id: new mongoose.Types.ObjectId(),
        name: 'opium',
        description: 'euphoric rush, followed by relaxation and the relief of physical pain',
        category: 'non-synthetic narcotic',
        quantity: 50,
      }
    ];

    for (const itemData of itemsToAdd) {
      const newItem = new Item(itemData);
      await newItem.save();
      console.log(`Item "${newItem.name}" added to the database`);
    }

    // Additional initialization tasks can be added here

  } catch (error) {
    console.error('Error initializing app:', error);
  }
}
// console.log("second_log")
// Call the initialization function
initializeApp().then(() => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
});
