const { Router } = require('express');
const productService = require('../services/productService');
const { validateProduct } = require('./helpers/productHelpers.js')
const router = Router();

//actions
router.get('/', (req, res) => {

    let products = productService.getAll(req.query);
    res.render('home.hbs', {title: 'Browse', products: products})
});

router.get('/create', (req, res) => {
    res.render('create.hbs', {title: 'Create'})
});

router.post('/create', validateProduct, (req, res) => {    
    //productService.create(req.body, (err) => {
    //    if(err) {
    //        MediaElementAudioSourceNode, res.status(500).end()
    //    }
//
    //    res.redirect('/products')
    //});

    //понеже ни връща промис ще кажем then
    productService.create(req.body)
        .then(() => res.redirect('/products'))
        .catch(() => res.status(500).end())
});

router.get('/details/:productId', (req, res) => {
    let product =  productService.getOne(req.params.productId)

    res.render('details.hbs', {title: 'Details', product})
});


module.exports = router;

