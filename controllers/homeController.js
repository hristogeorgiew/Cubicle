const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.redirect('/products')
})

router.get('/about', (req, res) => {
    //action
    res.render('about.hbs', {title: 'About'})
});

module.exports = router;