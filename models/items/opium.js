const Item = require('../item.js'); 

// Create a new item
const newItem = new Item({
  name: 'opium',
  description: 'euphoric rush, followed by relaxation and the relief of physical pain',
  category: 'non-synthetic narcotic',
  quantity: 50,
});

// Save the item to the database
newItem.save((err, savedItem) => {
  if (err) {
    console.error('Error saving item:', err);
  } else {
    console.log('Item saved:', savedItem);
  }
});
