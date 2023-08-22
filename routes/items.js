const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController'); // Import your controller functions

// Create a new item
router.post('/items', itemController.createItem);

// Get all items
router.get('/items', itemController.getAllItems);

// Get a specific item by ID
router.get('/item/:id', itemController.getItemById);

// Update an item by ID
router.put('/items/:id', itemController.updateItemById);

// Delete an item by ID
router.delete('/items/:id', itemController.deleteItemById);

// get item and description by name
router.get('/item/description/:name', itemController.getItemAndDescriptionByName);

//get item quantity by name
router.get('/items/quantity/:name', itemController.getItemQuantityByName);

//get item category by name
router.get('/item/category/:name', itemController.getItemCategoryByName);

// Update item quantity by name
router.put('/items/update-quantity/:name', itemController.updateItemQuantityByname);

module.exports = router;
