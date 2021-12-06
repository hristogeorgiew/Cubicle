const { Router } = require('express');
const productService = require('../services/productService');
const { validateProduct } = require('./helpers/productHelpers.js')
const router = Router();

//actions
router.get('/', (req, res) => {
    let products = productService.getAll();
    res.render('home.hbs', {title: 'Browse', products: products})
});

router.get('/create', (req, res) => {
    res.render('create.hbs', {title: 'Create'})
});

router.post('/create', validateProduct, (req, res) => {    
    productService.create(req.body);

    res.redirect('/products')
});

router.get('/details/:productId', (req, res) => {
    let product =  productService.getOne(req.params.productId)

    res.render('details.hbs', {title: 'Details', product})
});


module.exports = router;

