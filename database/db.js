// const mongoose = require('mongoose');

// const mongourl = 'mongodb://127.0.0.1:27017/testnodeDB';

// exports.connectdb = async () => {
//   try {
//     await mongoose.connect(mongourl, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB successfully connected');
//   } catch (err) {
//     console.error('Error connecting to MongoDB:', err);
//   }
// };

const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const mongourl = process.env.MONGO_URL;

exports.connectdb = async () => {
  try {
    await mongoose.connect(mongourl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB successfully connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }
};
