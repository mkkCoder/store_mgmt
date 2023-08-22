const Item = require('../item.js'); 

// Create a new item
const newItem = new Item({
  name: 'marihuana',
  description: 'Relieves pain and discomfort (chillin)',
  category: 'drug medicine',
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
