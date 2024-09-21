// const mongoose = require('mongoose');

// const productSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: Number,
//         required: true
//     },
//     stock: {
//         type: Number,
//         default: 0
//     }
// });

// const Product = mongoose.model('Product', productSchema);
// module.exports = { Product };

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', UserSchema);
