const express = require('express');
const router = express.Router();

const productController = require('../controllers/ProductController');

router.get('/products', productController.index);
router.get('/products/:id', productController.show);
router.put('/products/:id', productController.update);
router.delete('/products/:id', productController.remove);
router.post('/products', productController.store);

module.exports = router;
