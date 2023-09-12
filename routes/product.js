const express = require('express');
const Router = express.Router();
const pool = require('../util/database').pool;
const validator = require('validator'); // Import the validator library

Router.post('/products', async (req, res) => {
  try {
    const {
      product_name,
      product_type,
      product_price,
      product_model,
      product_slug,
      price_list,
    } = req.body;

    // Validate product_name
    if (!validator.isLength(product_name, { min: 1 })) {
      return res.status(400).json({ message: 'Product name is required' });
    }

    // Validate product_type
    if (!validator.isLength(product_type, { min: 1 })) {
      return res.status(400).json({ message: 'Product type is required' });
    }

    // Validate product_price as a numeric value
    if (!validator.isNumeric(product_price.toString())) {
      return res.status(400).json({
        message: 'Product price is required and must be in numeric format',
      });
    }

    // Validate product_model
    if (!validator.isLength(product_model, { min: 1 })) {
      return res.status(400).json({ message: 'Product model is required' });
    }

    // Validate product_slug with a regex pattern (hypen between characters)
    if (!validator.matches(product_slug, /^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*$/)) {
      return res.status(400).json({
        message: 'Product slug is required, and it must have a hyphen between alphanumeric characters',
      });
    }

    if (!validator.isURL(image_url)) {
      return res.status(400).json({ message: 'Image URL is not valid' });
    }

    const [result] = await pool.query(
      'INSERT INTO product (product_name, product_type, product_price, product_model, product_slug, price_list,image_url) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [product_name, product_type, product_price, product_model, product_slug, price_list]
    );

    if (!result) {
      return res.status(404).json({ message: 'Product could not be added' });
    } else {
      return res.status(200).json({ message: 'Product added successfully' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error while adding product' });
  }
});

Router.get('/products/:product', async (req, res) => {
  // Your GET endpoint logic here
});

module.exports = Router;
