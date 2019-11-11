const express = require('express');
const router = express();

// Routes
const indexRouter = require('../src/routes/index');
const productsRouter = require('../src/routes/products');

router.use('/', indexRouter);
router.use('/', productsRouter);

module.exports = router;
