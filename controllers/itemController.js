const Item = require('../models/item');

// Controller for creating a new item
const createItem = async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller for getting all items
const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller for getting a specific item by ID
const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller for updating an item by ID
const updateItemById = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller for deleting an item by ID
const deleteItemById = async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndRemove(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getItemAndDescriptionByName = async (req, res) => {
  try {
    const item = await Item.find({name: req.params.name});
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item[0].name + " - " + item[0].description);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getItemQuantityByName = async (req, res) => {
  try {
    const item = await Item.find({name: req.params.name});
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item[0].quantity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getItemCategoryByName = async (req, res) => {
  try {
    const item = await Item.find({name: req.params.name});
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item[0].category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateItemById,
  deleteItemById,
  getItemAndDescriptionByName,
  getItemQuantityByName,
  getItemCategoryByName
};