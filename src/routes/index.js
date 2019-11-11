const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const product = require('../models/Product');
const productModel  = mongoose.model('Product');

router.get('/', function(req, res) {
  productModel.create({
    title: 'ReactJS',
    description: 'Framework JavaScript',
    url: 'reactjs.com'
  }).then(null);
  res.json({ msg: 'This is the index' });
});

module.exports = router;
