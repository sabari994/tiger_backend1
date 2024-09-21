// const express = require('express');
// // const {User} = require('../models/user');
// const router = express.Router();
// const { register, login } = require('../controllers/productcontroller')

// router.post('/user',usercontroller.createuser);
// router.post('/product',productcontroller.createProduct)
  
// router.post('/register', register);
// router.post('/login', login);


// module.exports = router;

const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/productcontroller');

router.post('/register', register);
router.post('/login', login);

module.exports = router;
