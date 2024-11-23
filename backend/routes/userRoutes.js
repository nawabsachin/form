const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST route to add a user
router.post('/add', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User saved successfully!' });
  } catch (error) {
    res.status(400).json({ message: 'Error saving user', error });
  }
});

module.exports = router;
