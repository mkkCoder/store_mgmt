const Item = require('../item.js'); 

// Create a new item
const newItem = new Item({
  name: 'cocaine',
  description: 'intense feeling of happiness, sexual arousal, loss of contact with reality',
  category: 'tropane alkaloid',
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
