// const { Product } = require('../models/product');

// const createProduct = async (req, res) => {
//     try {
//         const { name, price, stock } = req.body;    
//         const newProduct = new Product({ name, price, stock });
//         await newProduct.save();
        
//         res.status(201).json({
//             msg: 'Product created',
//             data: newProduct
//         });
//     } catch (error) {
//         res.status(500).json({ msg: 'Error creating product', error: error.message });
//     }
// };

// module.exports = { createProduct };

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/product');

// User Registration
exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// User Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
